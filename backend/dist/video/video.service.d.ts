import { VideoEntity } from '../entities/video.entity';
import { Repository } from 'typeorm';
import { VideoDto } from './dto/video.dto';
import { LikeEntity } from '../entities/like.entity';
import { UserEntity } from '../entities/user.entity';
export declare class VideoService {
    private readonly videoRepository;
    private readonly likeRepository;
    private readonly userRepository;
    constructor(videoRepository: Repository<VideoEntity>, likeRepository: Repository<LikeEntity>, userRepository: Repository<UserEntity>);
    getById(id: number, isPublic?: boolean): Promise<VideoEntity>;
    update(id: number, dto: VideoDto): Promise<{
        name: string;
        description: string;
        isPublic: boolean;
        videoPath: string;
        thumbnailPath: string;
        views?: number;
        likes: LikeEntity[];
        duration?: number;
        comments: import("../entities/comment.entity").CommentEntity[];
        user: UserEntity;
        id: number;
        updatedAt: Date;
        createdAt: Date;
    } & VideoEntity>;
    findAll(searchTerm?: string): Promise<VideoEntity[]>;
    getMostPopularByViews(): Promise<VideoEntity[]>;
    create(userId: number): Promise<number>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    updateCountViews(videoId: number): Promise<VideoEntity>;
    updateCountLikes(userId: number, videoId: number): Promise<number>;
}
