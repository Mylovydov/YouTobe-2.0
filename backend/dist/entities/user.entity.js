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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const video_entity_1 = require("./video.entity");
const base_1 = require("../utils/base");
const subscription_entity_1 = require("./subscription.entity");
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const { UPDATE, CREATE } = crud_1.CrudValidationGroups;
let UserEntity = class UserEntity extends base_1.Base {
};
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsDefined)({ groups: [CREATE] }),
    (0, class_validator_1.IsEmail)({}, { message: 'Incorrect email' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ groups: [CREATE] }),
    (0, class_validator_1.IsString)({ always: true, message: 'Password must be a string' }),
    (0, class_validator_1.Length)(6, 16, { message: 'Length password' }),
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE, CREATE] }),
    (0, class_validator_1.IsString)({ always: true, message: 'name must be a string' }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ always: true }),
    (0, class_validator_1.IsBoolean)({ always: true }),
    (0, typeorm_1.Column)({ default: false, name: 'is_verified' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isVerified", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ always: true }),
    (0, typeorm_1.Column)({ default: 0, name: 'subscribers_count' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "subscribersCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ always: true }),
    (0, typeorm_1.Column)({ default: '', type: 'text' }),
    __metadata("design:type", String)
], UserEntity.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ always: true }),
    (0, typeorm_1.Column)({ default: '', name: 'avatar_path' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatarPath", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => video_entity_1.VideoEntity, video => video.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "videos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, subscription => subscription.fromUser),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.SubscriptionEntity, subscription => subscription.toChannel),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscribers", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('User')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map