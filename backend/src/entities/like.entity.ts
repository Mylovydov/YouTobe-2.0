import { Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Base } from '../utils/base'
import { VideoEntity } from './video.entity'
import { UserEntity } from './user.entity'

@Entity({ name: 'Like' })
export class LikeEntity extends Base {
	@ManyToOne(() => VideoEntity, video => video.likes)
	@JoinColumn({ name: 'video_id' })
	video: VideoEntity

	@ManyToOne(() => UserEntity)
	@JoinColumn({ name: 'user_id' })
	user: UserEntity
}
