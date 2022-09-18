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
const crud_1 = require("@nestjsx/crud");
const user_entity_1 = require("../entities/user.entity");
const user_crud_options_1 = require("./user.crud-options");
const user_decorator_1 = require("./decorators/user.decorator");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    async subscribeToChannel(channelId, id) {
        return this.service.subscribe(id, +channelId);
    }
    async createOne(req, dto) {
        const user = await this.service.findOne({ where: { email: dto.email } });
        if (user) {
            throw new common_1.BadRequestException('User exists!!');
        }
        return this.base.createOneBase(req, dto);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(crud_1.CrudRequestInterceptor),
    (0, common_1.Patch)('/subscribe/:channelId'),
    __param(0, (0, common_1.Param)('channelId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "subscribeToChannel", null);
__decorate([
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createOne", null);
UserController = __decorate([
    (0, crud_1.Crud)(user_crud_options_1.userCrudOptions),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map