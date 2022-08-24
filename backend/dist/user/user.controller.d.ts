import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<import("../entities/user.entity").UserEntity>;
    getUser(id: string): Promise<import("../entities/user.entity").UserEntity>;
    updateProfile(dto: UserDto, id: string): Promise<import("../entities/user.entity").UserEntity>;
    subscribeToChannel(id: number, channelId: string): Promise<boolean>;
    getUsers(): Promise<import("../entities/user.entity").UserEntity[]>;
}
