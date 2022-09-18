import { IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsString({ message: 'Must be a string' })
	@IsEmail()
	readonly email: string

	@IsString({ message: 'Must be a string' })
	@MinLength(6, {
		message: 'Not less then 6 symbols'
	})
	readonly password: string
}
