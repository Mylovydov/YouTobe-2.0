import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { SubscriptionEntity } from '../entities/subscription.entity'
import { Repository } from 'typeorm'

// @Injectable()
// export class UserService {
// 	constructor(
// 		@InjectRepository(UserEntity)
// 		private readonly userRepository: Repository<UserEntity>,
// 		@InjectRepository(SubscriptionEntity)
// 		private readonly subscriptionRepository: Repository<SubscriptionEntity>,
// 		private readonly configService: ConfigService,
// 		@Inject(forwardRef(() => AuthService))
// 		private readonly authService: AuthService
// 	) {
// 	}
//
// 	async createUser(dto: CreateUserDto): Promise<UserEntity> {
// 		const newUser = await this.userRepository.create(dto)
// 		return await this.userRepository.save(newUser)
// 	}
//
// 	async updateProfile(id: number, dto: UserDto): Promise<UserEntity> {
// 		const user = await this.getUserById(id)
//
// 		const candidate = await this.getUserByEmail(dto.email)
// 		if (candidate && candidate.id !== id) {
// 			throw new BadRequestException(`Email: ${dto.email} is taken`)
// 		}
//
// 		if (dto.password) {
// 			user.password = await this.authService.hashPassword(dto.password)
// 		}
//
// 		user.email = dto.email
// 		user.name = dto.name
// 		user.description = dto.description
// 		user.avatarPath = dto.avatarPath
//
// 		return await this.userRepository.save(user)
// 	}
//
// 	async getAll(): Promise<UserEntity[]> {
// 		return await this.userRepository.find({
// 			relations: { videos: true, subscriptions: { toChannel: true } }
// 		})
// 	}
//
// 	async subscribe(id: number, channelId: number): Promise<boolean> {
// 		const subscribe = {
// 			toChannel: { id: channelId },
// 			fromUser: { id }
// 		}
// 		const isSubscribed = await this.subscriptionRepository.findOneBy(subscribe)
//
// 		if (!isSubscribed) {
// 			const newSubscription = await this.subscriptionRepository.create(
// 				subscribe
// 			)
// 			await this.subscriptionRepository.save(newSubscription)
// 			return true
// 		}
//
// 		await this.subscriptionRepository.delete(subscribe)
// 		return false
// 	}
//
// 	async getUserByEmail(
// 		email: CreateUserDto['email'],
// 		selectFields: string[] = []
// 	): Promise<UserEntity> {
// 		return await this.userRepository.findOne({
// 			where: {
// 				email
// 			},
// 			select: selectFields as FindOptionsSelect<UserEntity>
// 		})
// 	}
//
// 	async getUserById(id: number): Promise<UserEntity> {
// 		const user = await this.userRepository.findOne({
// 			where: { id },
// 			relations: {
// 				videos: true,
// 				subscriptions: {
// 					fromUser: true
// 				}
// 			},
// 			order: {
// 				createdAt: 'DESC'
// 			}
// 		})
//
// 		if (!user) {
// 			throw new NotFoundException('User not found')
// 		}
// 		return user
// 	}
// }

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
	constructor(
		@InjectRepository(UserEntity) userRepository,
		@InjectRepository(SubscriptionEntity)
		private readonly subscriptionRepository: Repository<SubscriptionEntity>
	) {
		super(userRepository)
	}

	async subscribe(id: number, channelId: number): Promise<boolean> {
		const subscribe = {
			toChannel: { id: channelId },
			fromUser: { id }
		}
		const isSubscribed = await this.subscriptionRepository.findOneBy(subscribe)

		if (!isSubscribed) {
			const newSubscription = await this.subscriptionRepository.create(
				subscribe
			)
			await this.subscriptionRepository.save(newSubscription)
			return true
		}

		await this.subscriptionRepository.delete(subscribe)
		return false
	}
}
