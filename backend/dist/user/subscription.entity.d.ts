import { Base } from '../utils/base';
import { UserEntity } from './user.entity';
export declare class SubscriptionEntity extends Base {
    fromUser: UserEntity;
    toChannel: UserEntity;
}
