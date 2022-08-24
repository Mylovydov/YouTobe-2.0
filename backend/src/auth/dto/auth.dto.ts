import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail({}, { message: 'Uncorrected email' })
	@IsString({ message: 'Must be a string' })
	readonly email: string

	@MinLength(6, {
		message: 'Not less then 6 symbols'
	})
	@IsString({ message: 'Must be a string' })
	readonly password: string
}
