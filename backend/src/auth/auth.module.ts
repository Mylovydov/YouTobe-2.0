import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './strategies/jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from '../config/jwt.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { UserModule } from '../user/user.module'

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	imports: [
		forwardRef(() => UserModule),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		TypeOrmModule.forFeature([UserEntity]),
		ConfigModule
	],
	exports: [AuthService, JwtModule]
})
export class AuthModule {}
