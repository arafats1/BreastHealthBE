/// <reference types="multer" />
import { SignUpsService } from './sign-ups.service';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { SignUpEntity } from './entities/sign-up.entity';
import { CreateFollowupDto } from 'src/followups/dto/create-followup.dto';
import { CreateReviewDto } from 'src/reviews/dto/create-review.dto';
export declare class SignUpsController {
    private readonly signUpsService;
    constructor(signUpsService: SignUpsService);
    findAll(): Promise<SignUpEntity[]>;
    createFollowup(id: string, createFollowupDto: CreateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    findFollowups(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").FollowUp[]>;
    uploadImage(id: string, file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse | import(".prisma/client").Upload>;
    findUploads(id: string): import(".prisma/client").Prisma.Prisma__SignUpClient<{
        uploads: import(".prisma/client").Upload[];
    }, never>;
    findReviews(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Review[]>;
    createReview(id: string, createReviewDto: CreateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    findDashboard(id: string): Promise<SignUpEntity>;
    update(id: string, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
