// import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UseFilters } from "@nestjs/common";
// import { AuthService } from './auth.service'
// import { AuthDto } from './dto/auth.dto'
// import { HttpExceptionFilter } from "../httpException/http-exception.filter";
//
// @Controller('auth')
// export class AuthController {
// 	constructor(private readonly authService: AuthService) {}
//
// 	@Post('/login')
// 	@HttpCode(200)
// 	async login(@Body() userDto: AuthDto) {
// 		return await this.authService.login(userDto)
// 	}
//
// 	@Post('/registration')
// 	async registration(@Body() userDto: AuthDto) {
// 		return await this.authService.registration(userDto)
// 	}
//
// 	@UseFilters(HttpExceptionFilter)
// 	@Post('/test')
// 	test() {
// 		throw new HttpException('test', HttpStatus.BAD_REQUEST)
// 	}
// }
