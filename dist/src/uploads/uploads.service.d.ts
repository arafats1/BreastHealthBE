/// <reference types="multer" />
import { CreateUploadDto } from './dto/create-upload.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class UploadsService {
    private prisma;
    private cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    uploadImageToCloudinary(id: number, file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    create(createUploadDto: CreateUploadDto): import(".prisma/client").Prisma.Prisma__UploadClient<import(".prisma/client").Upload, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Upload[]>;
}
