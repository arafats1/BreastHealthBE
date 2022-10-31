import { QuestionnairesService } from './questionnaires.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
export declare class QuestionnairesController {
    private readonly questionnairesService;
    constructor(questionnairesService: QuestionnairesService);
    create(createQuestionnaireDto: CreateQuestionnaireDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto): string;
    remove(id: string): string;
}
