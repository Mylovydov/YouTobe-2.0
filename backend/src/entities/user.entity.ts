import { Column, Entity, OneToMany } from 'typeorm'
import { VideoEntity } from './video.entity'
import { Base } from '../utils/base'
import { SubscriptionEntity } from './subscription.entity'
import { CrudValidationGroups } from '@nestjsx/crud'
import { IsBoolean, IsDefined, IsEmail, IsOptional, IsString, Length } from 'class-validator'

const { UPDATE, CREATE } = CrudValidationGroups

@Entity('User')
export class UserEntity extends Base {

	@IsOptional({ groups: [UPDATE] })
	@IsDefined({ groups: [CREATE] })
	@IsEmail({}, { message: 'Incorrect email' })
	@Column({ unique: true })
	email: string

	@IsDefined({ groups: [CREATE] })
	@IsString({ always: true, message: 'Password must be a string' })
	@Length(6, 16, { message: 'Length password' })
	@Column({ select: false })
	password: string

	@IsOptional({ groups: [UPDATE, CREATE] })
	@IsString({ always: true, message: 'name must be a string' })
	@Column({ default: '' })
	name: string

	@IsOptional({ always: true })
	@IsBoolean({ always: true })
	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean

	@IsOptional({ always: true })
	@Column({ default: 0, name: 'subscribers_count' })
	subscribersCount?: number

	@IsOptional({ always: true })
	@Column({ default: '', type: 'text' })
	description: string

	@IsOptional({ always: true })
	@Column({ default: '', name: 'avatar_path' })
	avatarPath: string

	@OneToMany(() => VideoEntity, video => video.user)
	videos: VideoEntity[]

	@OneToMany(() => SubscriptionEntity, subscription => subscription.fromUser)
	subscriptions: SubscriptionEntity[]

	@OneToMany(() => SubscriptionEntity, subscription => subscription.toChannel)
	subscribers: SubscriptionEntity[]
}
