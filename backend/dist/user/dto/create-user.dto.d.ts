import { UserEntity } from '../../entities/user.entity';
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class GetManyResponseDto {
    data: UserEntity[];
}
