import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(id: number, dto: CommentDto): Promise<import("../entities/comment.entity").CommentEntity>;
}
