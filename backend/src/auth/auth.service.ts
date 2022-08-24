import {
	forwardRef,
	HttpException,
	HttpStatus,
	Inject,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { UserEntity } from '../entities/user.entity'
import { JwtService } from '@nestjs/jwt'
import { AuthDto } from './dto/auth.dto'
import * as bcrypt from 'bcrypt'
import { UserService } from '../user/user.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(user.id)
		}
	}

	async registration(dto: AuthDto) {
		const candidate = await this.userService.getUserByEmail(dto.email)

		if (candidate) {
			throw new HttpException(
				`A user with email: ${dto.email} already exists`,
				HttpStatus.BAD_REQUEST
			)
		}

		const hashPassword = await this.hashPassword(dto.password)
		const user = await this.userService.createUser({
			...dto,
			password: hashPassword
		})
		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(user.id)
		}
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.userService.getUserByEmail(dto.email, [
			'id',
			'email',
			'password'
		])
		const isValidPassword = await bcrypt.compare(dto.password, user.password)

		if (user && isValidPassword) {
			return user
		}

		throw new UnauthorizedException({ message: `Incorrect email or password` })
	}

	async issueAccessToken(userId: number) {
		const payload = {
			id: userId
		}
		return await this.jwtService.signAsync(payload, {
			expiresIn: '30d'
		})
	}

	async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(
			password,
			Number(this.configService.get('PASS_SALT'))
		)
	}

	returnUserFields(user: UserEntity) {
		return {
			id: user.id,
			email: user.email
		}
	}
}
