import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class QuestionnairesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createQuestionnaireDto: CreateQuestionnaireDto): import(".prisma/client").Prisma.Prisma__QuestionnaireClient<import(".prisma/client").Questionnaire, never>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto): string;
    remove(id: number): string;
}
