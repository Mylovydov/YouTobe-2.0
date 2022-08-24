import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Put,
	Query
} from '@nestjs/common'
import { VideoService } from './video.service'
import { CurrentUser } from '../user/decorators/user.decorator'
import { Auth } from '../auth/decorators/auth.decorator'
import { VideoDto } from './dto/video.dto'

@Controller('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Auth()
	@Post('create')
	create(@CurrentUser('id') id: number) {
		return this.videoService.create(id)
	}

	@Auth()
	@Get('get-private/:id')
	getPrivateVideo(@Param('id') id: string) {
		return this.videoService.getById(+id)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return await this.videoService.findAll(searchTerm)
	}

	@Get('most-popular')
	mostPopularByViews() {
		return this.videoService.getMostPopularByViews()
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.videoService.getById(+id)
	}

	@Auth()
	@Put(':id')
	updateVideo(@Param('id') id: string, @Body() dto: VideoDto) {
		return this.videoService.update(+id, dto)
	}

	@Auth()
	@Delete(':id')
	deleteVideo(@Param('id') id: string) {
		return this.videoService.delete(+id)
	}

	@Auth()
	@Patch('update-like/:videoId')
	updateLikesCount(
		@CurrentUser('id') id: number,
		@Param('videoId') videoId: string
	) {
		return this.videoService.updateCountLikes(id, +videoId)
	}

	@Put('update-views/:videoId')
	updateViewsCount(@Param('videoId') videoId: string) {
		return this.videoService.updateCountViews(+videoId)
	}
}
