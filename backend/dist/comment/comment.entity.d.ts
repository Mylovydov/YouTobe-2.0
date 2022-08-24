import { UserEntity } from '../user/user.entity';
import { Base } from '../utils/base';
import { VideoEntity } from '../video/video.entity';
export declare class CommentEntity extends Base {
    message: string;
    video: VideoEntity;
    user: UserEntity;
}
