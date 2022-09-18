import { UserEntity } from '../entities/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubscriptionEntity } from '../entities/subscription.entity';
import { Repository } from 'typeorm';
export declare class UserService extends TypeOrmCrudService<UserEntity> {
    private readonly subscriptionRepository;
    constructor(userRepository: any, subscriptionRepository: Repository<SubscriptionEntity>);
    subscribe(id: number, channelId: number): Promise<boolean>;
}
