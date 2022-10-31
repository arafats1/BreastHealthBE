import { Module } from '@nestjs/common';
import { QuestionnairesService } from './questionnaires.service';
import { QuestionnairesController } from './questionnaires.controller';

@Module({
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService]
})
export class QuestionnairesModule {}
