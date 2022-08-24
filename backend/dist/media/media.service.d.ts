/// <reference types="multer" />
import { IMediaResponce } from './media.interface';
export declare class MediaService {
    saveMedia(mediaFile: Express.Multer.File, folder?: string): Promise<IMediaResponce>;
}
