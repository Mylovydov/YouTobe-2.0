import { UserEntity } from './user.entity';
import { Base } from '../utils/base';
import { VideoEntity } from './video.entity';
export declare class CommentEntity extends Base {
    message: string;
    video: VideoEntity;
    user: UserEntity;
}
