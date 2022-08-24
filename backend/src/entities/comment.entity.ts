import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity'
import { Base } from '../utils/base'
import { VideoEntity } from './video.entity'

@Entity('Comment')
export class CommentEntity extends Base {
	@Column({ default: '', type: 'text' })
	message: string

	@ManyToOne(() => VideoEntity, video => video.comments)
	@JoinColumn({ name: 'video_id' })
	video: VideoEntity

	@ManyToOne(() => UserEntity)
	@JoinColumn({ name: 'user_id' })
	user: UserEntity
}
