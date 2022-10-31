import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class QuestionnairesService {
  constructor(private prisma: PrismaService) {}
  create(createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.prisma.questionnaire.create({ data: createQuestionnaireDto });
  }

  findAll() {
    return `This action returns all questionnaires`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionnaire`;
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionnaire`;
  }
}
