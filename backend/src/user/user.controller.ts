import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";
import { Crud } from "@nestjsx/crud";
import { UserEntity } from "../entities/user.entity";

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

@Crud({
	model: {
		type: UserEntity
	}
})
@Controller('users')
export class UserController {
	constructor(public service: UserService) {}
}
