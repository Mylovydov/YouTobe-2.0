import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
// import { AuthModule } from '../auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { SubscriptionEntity } from '../entities/subscription.entity'

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [
		TypeOrmModule.forFeature([UserEntity, SubscriptionEntity]),
		ConfigModule
		// forwardRef(() => AuthModule)
	],
	exports: [UserService]
})
export class UserModule {}
