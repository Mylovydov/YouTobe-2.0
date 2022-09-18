import { UserEntity } from '../entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UserDto } from './dto/user.dto'
import { CrudOptions } from '@nestjsx/crud/lib/interfaces/crud-options.interface'

export const userCrudOptions: CrudOptions = {
	model: {
		type: UserEntity
	},
	query: {
		join: {
			videos: {
				eager: true,
				exclude: ['updatedAt', 'createdAt']
			},
			'videos.comments': {
				eager: true
			},
			'videos.likes': {
				eager: true
			}
		},
		exclude: ['updatedAt', 'createdAt', 'password'],
		persist: ['updatedAt'],
		sort: [
			{
				field: 'updatedAt',
				order: 'DESC'
			}
		],
		// limit: 10
		alwaysPaginate: true
	},
	params: {
		channelId: {
			type: 'string',
			field: 'channelId'
		}
	},
	dto: {
		create: CreateUserDto,
		update: UserDto
	}
}
