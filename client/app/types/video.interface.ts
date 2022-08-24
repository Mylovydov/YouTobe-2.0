import { IBase } from '@/types/base.interface'
import { IComment } from '@/types/comment.interface'
import { ILike } from '@/types/like.interface'
import { IUser } from '@/types/user.interface'

export interface IVideo extends IBase {
	name: string
	description: string
	isPublic: boolean
	views?: number
	duration?: number
	videoPath: string
	thumbnailPath: string
	comments: IComment[]
	user?: IUser
	likes: ILike[]
}

export interface IVideoDto
	extends Pick<IVideo, 'id' | 'thumbnailPath' | 'description' | 'videoPath' | 'isPublic'> {}