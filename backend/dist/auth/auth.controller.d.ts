import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userDto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    registration(userDto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
}
