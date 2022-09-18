import { BadRequestException, Controller, Param, Patch, UseInterceptors } from '@nestjs/common'
import { UserService } from './user.service'
import {
	Crud,
	CrudController,
	CrudRequest,
	CrudRequestInterceptor,
	Override,
	ParsedBody,
	ParsedRequest
} from '@nestjsx/crud'
import { UserEntity } from '../entities/user.entity'
import { userCrudOptions } from './user.crud-options'
import { CurrentUser } from './decorators/user.decorator'

// @Controller('user')
// export class UserController {
// 	constructor(private readonly userService: UserService) {}
//
// 	@Auth()
// 	@HttpCode(200)
// 	@Get('profile')
// 	getProfile(@CurrentUser('id') id: number) {
// 		return this.userService.getUserById(id)
// 	}
//
// 	@HttpCode(200)
// 	@Get('by-id/:id')
// 	getUser(@Param('id') id: string) {
// 		return this.userService.getUserById(+id)
// 	}
//
// 	@Auth()
// 	@HttpCode(200)
// 	@Put('/update/:id')
// 	updateProfile(@Body() dto: UserDto, @Param('id') id: string) {
// 		return this.userService.updateProfile(+id, dto)
// 	}
//
// 	@Auth()
// 	@HttpCode(200)
// 	@Patch('/subscribe/:channelId')
// 	subscribeToChannel(
// 		@CurrentUser('id') id: number,
// 		@Param('channelId') channelId: string
// 	) {
// 		return this.userService.subscribe(id, +channelId)
// 	}
//
// 	@Auth()
// 	@HttpCode(200)
// 	@Get()
// 	getUsers() {
// 		return this.userService.getAll()
// 	}
// }

@Crud(userCrudOptions)
@Controller('users')
export class UserController implements CrudController<UserEntity> {
	constructor(public service: UserService) {}

	get base(): CrudController<UserEntity> {
		return this
	}

	@UseInterceptors(CrudRequestInterceptor)
	@Patch('/subscribe/:channelId')
	async subscribeToChannel(
		@Param('channelId') channelId: string,
		@CurrentUser('id') id: number
	) {
		return this.service.subscribe(id, +channelId)
	}

	@Override()
	async createOne(
		@ParsedRequest() req: CrudRequest,
		@ParsedBody() dto: UserEntity
	): Promise<UserEntity> {
		const user = await this.service.findOne({ where: { email: dto.email } })
		if (user) {
			throw new BadRequestException('User exists!!')
		}
		return this.base.createOneBase(req, dto)
	}
}
