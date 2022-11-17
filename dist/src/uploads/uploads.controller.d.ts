/// <reference types="multer" />
import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    uploadImage(id: string, file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Upload[]>;
}
