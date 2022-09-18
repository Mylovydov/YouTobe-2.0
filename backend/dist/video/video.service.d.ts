import { VideoEntity } from '../entities/video.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class VideoService extends TypeOrmCrudService<VideoEntity> {
    readonly repo: any;
    constructor(repo: any);
}
