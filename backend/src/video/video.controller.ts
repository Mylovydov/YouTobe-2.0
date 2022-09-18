import { Controller } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { VideoEntity } from '../entities/video.entity'
import { VideoService } from './video.service'

// @Controller('video')
// export class VideoController {
// 	constructor(private readonly videoService: VideoService) {
// 	}
//
// 	@Auth()
// 	@Post('create')
// 	create(@CurrentUser('id') id: number = 2) {
// 		return this.videoService.create(id)
// 	}
//
// 	@Auth()
// 	@Get('get-private/:id')
// 	getPrivateVideo(@Param('id') id: string) {
// 		return this.videoService.getById(+id)
// 	}
//
// 	@Get()
// 	async getAll(@Query('searchTerm') searchTerm?: string) {
// 		return await this.videoService.findAll(searchTerm)
// 	}
//
// 	@Get('most-popular')
// 	mostPopularByViews() {
// 		return this.videoService.getMostPopularByViews()
// 	}
//
// 	@Get(':id')
// 	getById(@Param('id') id: string) {
// 		return this.videoService.getById(+id)
// 	}
//
// 	@Auth()
// 	@Put(':id')
// 	updateVideo(@Param('id') id: string, @Body() dto: VideoDto) {
// 		return this.videoService.update(+id, dto)
// 	}
//
// 	@Auth()
// 	@Delete(':id')
// 	deleteVideo(@Param('id') id: string) {
// 		return this.videoService.delete(+id)
// 	}
//
// 	@Auth()
// 	@Patch('update-like/:videoId')
// 	updateLikesCount(
// 		@CurrentUser('id') id: number,
// 		@Param('videoId') videoId: string
// 	) {
// 		return this.videoService.updateCountLikes(id, +videoId)
// 	}
//
// 	@Put('update-views/:videoId')
// 	updateViewsCount(@Param('videoId') videoId: string) {
// 		return this.videoService.updateCountViews(+videoId)
// 	}
// }

@Crud({
	model: {
		type: VideoEntity
	},
	params: {
		id: {
			type: 'string',
			primary: true,
			field: 'id'
		},
		videoId: {
			type: 'string',
			field: 'videoId'
		}
	},
	query: {
		join: {
			user: {
				allow: ['id', 'email', 'name', 'isVerified', 'subscribersCount', 'description'],
				eager: true
			}
		}
	}
})
@Controller('video')
export class VideoController {
	constructor(public service: VideoService) {
	}
}
