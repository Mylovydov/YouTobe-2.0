import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { UserEntity } from './user.entity'
import { Base } from '../utils/base'
import { CommentEntity } from './comment.entity'
import { LikeEntity } from './like.entity'

@Entity('Video')
export class VideoEntity extends Base {
	@Column()
	name: string

	@Column({ default: '', type: 'text' })
	description: string

	@Column({ default: false, name: 'is_public' })
	isPublic: boolean

	@Column({ default: 0 })
	views?: number

	@OneToMany(() => LikeEntity, like => like.video)
	likes: LikeEntity[]

	@Column({ default: 0 })
	duration?: number

	@Column({ default: '', name: 'video_path' })
	videoPath: string

	@Column({ default: '', name: 'thumbnail_path' })
	thumbnailPath: string

	@OneToMany(() => CommentEntity, comment => comment.video)
	comments: CommentEntity[]

	@ManyToOne(() => UserEntity, user => user.videos)
	@JoinColumn({ name: 'user_id' })
	user: UserEntity
}
