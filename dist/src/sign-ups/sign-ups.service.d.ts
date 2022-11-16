import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowupDto } from 'src/followups/dto/create-followup.dto';
import { CreateReviewDto } from 'src/reviews/dto/create-review.dto';
export declare class SignUpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSignUpDto: CreateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    createFollowup(id: number, createFollowupDto: CreateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    createReview(id: number, createReviewDto: CreateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    findFollowups(id: number): import(".prisma/client").PrismaPromise<import(".prisma/client").FollowUp[]>;
    findReviews(id: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Review[]>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").SignUp & {
        questions: {
            gender: string;
            ageRange: string;
            district: string;
            educationLevel: string;
            breastCondition: string;
            knowSomeoneWithBreastCondition: string;
            yourMotivation: string;
        }[];
        followUps: {
            swellingOnLeftOrone: string;
            unUsualDischarge: string;
            hardSpotOnBreast: string;
            lastPeriodDate: string;
            daysPeriodLasted: string;
        }[];
        reviews: {
            review: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp & {
        questions: {
            gender: string;
            ageRange: string;
            district: string;
            educationLevel: string;
            breastCondition: string;
            knowSomeoneWithBreastCondition: string;
            yourMotivation: string;
        }[];
        followUps: {
            swellingOnLeftOrone: string;
            unUsualDischarge: string;
            hardSpotOnBreast: string;
            lastPeriodDate: string;
            daysPeriodLasted: string;
        }[];
        reviews: {
            review: string;
        }[];
    }, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    update(id: number, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
