import { UserService } from './user.service';
import { CrudController, CrudRequest } from '@nestjsx/crud';
import { UserEntity } from '../entities/user.entity';
export declare class UserController implements CrudController<UserEntity> {
    service: UserService;
    constructor(service: UserService);
    get base(): CrudController<UserEntity>;
    subscribeToChannel(channelId: string, id: number): Promise<boolean>;
    createOne(req: CrudRequest, dto: UserEntity): Promise<UserEntity>;
}
