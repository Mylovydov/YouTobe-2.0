import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CurrentUser } from '../user/decorators/user.decorator'
import { CommentDto } from './dto/comment.dto'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Post()
	@Auth()
	@HttpCode(201)
	create(@CurrentUser('id') id: number, @Body() dto: CommentDto) {
		return this.commentService.create(id, dto)
	}
}
