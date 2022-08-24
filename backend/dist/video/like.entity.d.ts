import { Base } from '../utils/base';
import { VideoEntity } from './video.entity';
import { UserEntity } from '../entities/user.entity';
export declare class LikeEntity extends Base {
    video: VideoEntity;
    user: UserEntity;
}
