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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("./decorators/user.decorator");
const user_dto_1 = require("./dto/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getProfile(id) {
        return this.userService.getUserById(id);
    }
    getUser(id) {
        return this.userService.getUserById(+id);
    }
    updateProfile(dto, id) {
        return this.userService.updateProfile(+id, dto);
    }
    subscribeToChannel(id, channelId) {
        return this.userService.subscribe(id, +channelId);
    }
    getUsers() {
        return this.userService.getAll();
    }
};
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('profile'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Patch)('/subscribe/:channelId'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "subscribeToChannel", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map