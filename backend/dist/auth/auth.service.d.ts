import { UserEntity } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly jwtService;
    private readonly configService;
    private readonly userService;
    constructor(jwtService: JwtService, configService: ConfigService, userService: UserService);
    login(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    registration(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    private validateUser;
    issueAccessToken(userId: number): Promise<string>;
    hashPassword(password: string): Promise<string>;
    returnUserFields(user: UserEntity): {
        id: number;
        email: string;
    };
}
