import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionnaireDto } from 'src/questionnaires/dto/create-questionnaire.dto';
export declare class SignUpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSignUpDto: CreateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    createQuestionnaire(id: number, createQuestionnaireDto: CreateQuestionnaireDto): import(".prisma/client").Prisma.Prisma__QuestionnaireClient<import(".prisma/client").Questionnaire, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").SignUp & {
        questions: {
            question: string;
            answer: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp & {
        questions: {
            question: string;
            answer: string;
        }[];
    }, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    update(id: number, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
