import { UserEntity } from "../entities/user.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
export declare class UserService extends TypeOrmCrudService<UserEntity> {
    readonly repo: any;
    constructor(repo: any);
}
