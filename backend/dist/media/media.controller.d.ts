/// <reference types="multer" />
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadMediaFile(file: Express.Multer.File, folder?: string): Promise<import("./media.interface").IMediaResponce>;
}
