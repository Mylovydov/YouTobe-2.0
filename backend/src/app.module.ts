import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'
import { UserModule } from './user/user.module'
import { VideoModule } from './video/video.module'
import { CommentModule } from './comment/comment.module'
import { MediaModule } from './media/media.module'
import { TestModule } from './test/test.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.development.env',
			cache: true
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		UserModule,
		VideoModule,
		CommentModule,
		// AuthModule,
		MediaModule,
		TestModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
