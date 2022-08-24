import { CommentEntity } from '../entities/comment.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<CommentEntity>);
    create(userId: number, dto: CommentDto): Promise<CommentEntity>;
}
