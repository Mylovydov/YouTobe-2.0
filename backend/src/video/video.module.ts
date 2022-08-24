import { Module } from '@nestjs/common'
import { VideoService } from './video.service'
import { VideoController } from './video.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VideoEntity } from '../entities/video.entity'
import { LikeEntity } from '../entities/like.entity'
import { UserEntity } from '../entities/user.entity'

@Module({
	controllers: [VideoController],
	providers: [VideoService],
	imports: [TypeOrmModule.forFeature([VideoEntity, LikeEntity, UserEntity])]
})
export class VideoModule {}
