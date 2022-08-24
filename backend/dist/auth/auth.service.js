"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(jwtService, configService, userService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.userService = userService;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        };
    }
    async registration(dto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (candidate) {
            throw new common_1.HttpException(`A user with email: ${dto.email} already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await this.hashPassword(dto.password);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user.id)
        };
    }
    async validateUser(dto) {
        const user = await this.userService.getUserByEmail(dto.email, [
            'id',
            'email',
            'password'
        ]);
        const isValidPassword = await bcrypt.compare(dto.password, user.password);
        if (user && isValidPassword) {
            return user;
        }
        throw new common_1.UnauthorizedException({ message: `Incorrect email or password` });
    }
    async issueAccessToken(userId) {
        const payload = {
            id: userId
        };
        return await this.jwtService.signAsync(payload, {
            expiresIn: '30d'
        });
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, Number(this.configService.get('PASS_SALT')));
    }
    returnUserFields(user) {
        return {
            id: user.id,
            email: user.email
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map