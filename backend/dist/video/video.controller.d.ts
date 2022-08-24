import { VideoService } from './video.service';
import { VideoDto } from './dto/video.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    create(id: number): Promise<number>;
    getPrivateVideo(id: string): Promise<import("../entities/video.entity").VideoEntity>;
    getAll(searchTerm?: string): Promise<import("../entities/video.entity").VideoEntity[]>;
    mostPopularByViews(): Promise<import("../entities/video.entity").VideoEntity[]>;
    getById(id: string): Promise<import("../entities/video.entity").VideoEntity>;
    updateVideo(id: string, dto: VideoDto): Promise<{
        name: string;
        description: string;
        isPublic: boolean;
        videoPath: string;
        thumbnailPath: string;
        views?: number;
        likes: import("../entities/like.entity").LikeEntity[];
        duration?: number;
        comments: import("../entities/comment.entity").CommentEntity[];
        user: import("../entities/user.entity").UserEntity;
        id: number;
        updatedAt: Date;
        createdAt: Date;
    } & import("../entities/video.entity").VideoEntity>;
    deleteVideo(id: string): Promise<import("typeorm").DeleteResult>;
    updateLikesCount(id: number, videoId: string): Promise<number>;
    updateViewsCount(videoId: string): Promise<import("../entities/video.entity").VideoEntity>;
}
