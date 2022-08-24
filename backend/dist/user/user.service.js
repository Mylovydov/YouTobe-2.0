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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const subscription_entity_1 = require("../entities/subscription.entity");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(userRepository, subscriptionRepository, configService, authService) {
        this.userRepository = userRepository;
        this.subscriptionRepository = subscriptionRepository;
        this.configService = configService;
        this.authService = authService;
    }
    async createUser(dto) {
        const newUser = await this.userRepository.create(dto);
        return await this.userRepository.save(newUser);
    }
    async updateProfile(id, dto) {
        const user = await this.getUserById(id);
        const candidate = await this.getUserByEmail(dto.email);
        if (candidate && candidate.id !== id) {
            throw new common_1.BadRequestException(`Email: ${dto.email} is taken`);
        }
        if (dto.password) {
            user.password = await this.authService.hashPassword(dto.password);
        }
        user.email = dto.email;
        user.name = dto.name;
        user.description = dto.description;
        user.avatarPath = dto.avatarPath;
        return await this.userRepository.save(user);
    }
    async getAll() {
        return await this.userRepository.find({
            relations: { videos: true, subscriptions: { toChannel: true } }
        });
    }
    async subscribe(id, channelId) {
        const subscribe = {
            toChannel: { id: channelId },
            fromUser: { id }
        };
        const isSubscribed = await this.subscriptionRepository.findOneBy(subscribe);
        if (!isSubscribed) {
            const newSubscription = await this.subscriptionRepository.create(subscribe);
            await this.subscriptionRepository.save(newSubscription);
            return true;
        }
        await this.subscriptionRepository.delete(subscribe);
        return false;
    }
    async getUserByEmail(email, selectFields = []) {
        return await this.userRepository.findOne({
            where: {
                email
            },
            select: selectFields
        });
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: {
                videos: true,
                subscriptions: {
                    fromUser: true
                }
            },
            order: {
                createdAt: 'DESC'
            }
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(subscription_entity_1.SubscriptionEntity)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        config_1.ConfigService,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map