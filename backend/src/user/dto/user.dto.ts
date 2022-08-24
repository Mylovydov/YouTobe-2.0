import { IsEmail, IsString } from 'class-validator'

export class UserDto {
	@IsString({ message: 'Email must be a string' })
	@IsEmail()
	readonly email: string

	readonly password?: string

	@IsString({ message: 'Name must be a string' })
	readonly name: string

	@IsString({ message: 'Description must be a string' })
	readonly description: string

	@IsString({ message: 'Avatar path must be a string' })
	readonly avatarPath: string
}
