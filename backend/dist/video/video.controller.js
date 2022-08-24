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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const user_decorator_1 = require("../user/decorators/user.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const video_dto_1 = require("./dto/video.dto");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    create(id) {
        return this.videoService.create(id);
    }
    getPrivateVideo(id) {
        return this.videoService.getById(+id);
    }
    async getAll(searchTerm) {
        return await this.videoService.findAll(searchTerm);
    }
    mostPopularByViews() {
        return this.videoService.getMostPopularByViews();
    }
    getById(id) {
        return this.videoService.getById(+id);
    }
    updateVideo(id, dto) {
        return this.videoService.update(+id, dto);
    }
    deleteVideo(id) {
        return this.videoService.delete(+id);
    }
    updateLikesCount(id, videoId) {
        return this.videoService.updateCountLikes(id, +videoId);
    }
    updateViewsCount(videoId) {
        return this.videoService.updateCountViews(+videoId);
    }
};
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "create", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('get-private/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "getPrivateVideo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('most-popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "mostPopularByViews", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "getById", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, video_dto_1.VideoDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "updateVideo", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "deleteVideo", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Patch)('update-like/:videoId'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "updateLikesCount", null);
__decorate([
    (0, common_1.Put)('update-views/:videoId'),
    __param(0, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "updateViewsCount", null);
VideoController = __decorate([
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map