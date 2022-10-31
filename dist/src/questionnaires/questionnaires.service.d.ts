import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
export declare class QuestionnairesService {
    create(createQuestionnaireDto: CreateQuestionnaireDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto): string;
    remove(id: number): string;
}
