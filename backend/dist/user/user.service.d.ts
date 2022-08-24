import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SubscriptionEntity } from '../entities/subscription.entity';
import { UserDto } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';
export declare class UserService {
    private readonly userRepository;
    private readonly subscriptionRepository;
    private readonly configService;
    private readonly authService;
    constructor(userRepository: Repository<UserEntity>, subscriptionRepository: Repository<SubscriptionEntity>, configService: ConfigService, authService: AuthService);
    createUser(dto: CreateUserDto): Promise<UserEntity>;
    updateProfile(id: number, dto: UserDto): Promise<UserEntity>;
    getAll(): Promise<UserEntity[]>;
    subscribe(id: number, channelId: number): Promise<boolean>;
    getUserByEmail(email: CreateUserDto['email'], selectFields?: string[]): Promise<UserEntity>;
    getUserById(id: number): Promise<UserEntity>;
}
