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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("../entities/video.entity");
const typeorm_2 = require("typeorm");
const like_entity_1 = require("../entities/like.entity");
const user_entity_1 = require("../entities/user.entity");
let VideoService = class VideoService {
    constructor(videoRepository, likeRepository, userRepository) {
        this.videoRepository = videoRepository;
        this.likeRepository = likeRepository;
        this.userRepository = userRepository;
    }
    async getById(id, isPublic = false) {
        const filter = isPublic ? { id, isPublic: true } : { id };
        const video = await this.videoRepository.findOne({
            where: filter,
            relations: { user: true, comments: { user: true } },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true,
                    subscribersCount: true,
                    subscriptions: true
                },
                comments: {
                    message: true,
                    id: true,
                    user: {
                        id: true,
                        name: true,
                        avatarPath: true,
                        isVerified: true,
                        subscribersCount: true
                    }
                }
            }
        });
        if (!video) {
            throw new common_1.NotFoundException('Video not found');
        }
        return video;
    }
    async update(id, dto) {
        const video = await this.getById(id);
        return await this.videoRepository.save(Object.assign(Object.assign({}, video), dto));
    }
    async findAll(searchTerm) {
        let options = {};
        if (searchTerm) {
            options = {
                name: (0, typeorm_2.ILike)(`%${searchTerm}%`)
            };
        }
        return await this.videoRepository.find({
            where: Object.assign(Object.assign({}, options), { isPublic: true }),
            order: {
                createdAt: 'DESC'
            },
            relations: {
                user: true,
                comments: { user: true, video: true },
                likes: true
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true
                },
                likes: {
                    id: true
                }
            }
        });
    }
    async getMostPopularByViews() {
        return await this.videoRepository.find({
            where: {
                views: (0, typeorm_2.MoreThan)(0)
            },
            relations: {
                user: true
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    avatarPath: true,
                    isVerified: true
                }
            },
            order: {
                views: -1
            }
        });
    }
    async create(userId) {
        const videoData = {
            name: '',
            user: { id: userId },
            description: '',
            videoPath: '',
            thumbnailPath: ''
        };
        const newVideo = await this.videoRepository.create(videoData);
        const video = await this.videoRepository.save(newVideo);
        return video.id;
    }
    async delete(id) {
        const video = await this.videoRepository.findOneBy({ id });
        if (!video) {
            throw new common_1.NotFoundException('Video not found');
        }
        return await this.videoRepository.delete({ id });
    }
    async updateCountViews(videoId) {
        const video = await this.videoRepository.findOneBy({ id: videoId });
        if (!video) {
            throw new common_1.NotFoundException('Video not found');
        }
        video.views++;
        return await this.videoRepository.save(video);
    }
    async updateCountLikes(userId, videoId) {
        const like = {
            user: { id: userId },
            video: { id: videoId }
        };
        const isLiked = await this.likeRepository.findOneBy(like);
        const user = await this.userRepository.findOneBy({ id: userId });
        const video = await this.videoRepository.findOneBy({ id: videoId });
        console.log('user', user);
        console.log('video', video);
        if (!isLiked) {
            const newLike = await this.likeRepository.create({ video, user });
            await this.likeRepository.save(newLike);
            return await this.likeRepository.countBy({ video: like.video });
        }
        await this.likeRepository.delete(like);
        return await this.likeRepository.countBy({ video: like.video });
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(video_entity_1.VideoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(like_entity_1.LikeEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map