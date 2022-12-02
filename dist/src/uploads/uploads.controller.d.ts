import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Upload[]>;
}
