import { IsString } from 'class-validator'

export class VideoDto {
	@IsString()
	name: string

	@IsString()
	description: string

	isPublic?: boolean

	@IsString()
	videoPath: string

	@IsString()
	thumbnailPath: string
}
