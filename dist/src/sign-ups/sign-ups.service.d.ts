import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowupDto } from 'src/followups/dto/create-followup.dto';
export declare class SignUpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSignUpDto: CreateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    createFollowup(id: number, createFollowupDto: CreateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
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
    }, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    update(id: number, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
