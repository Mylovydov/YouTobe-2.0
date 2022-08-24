import { UserEntity } from '../entities/user.entity';
import { Base } from '../utils/base';
import { CommentEntity } from '../entities/comment.entity';
import { LikeEntity } from './like.entity';
export declare class VideoEntity extends Base {
    name: string;
    description: string;
    isPublic: boolean;
    views?: number;
    likes: LikeEntity[];
    duration?: number;
    videoPath: string;
    thumbnailPath: string;
    comments: CommentEntity[];
    user: UserEntity;
}
