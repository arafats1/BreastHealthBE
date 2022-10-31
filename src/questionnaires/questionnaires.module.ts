import { Module } from '@nestjs/common';
import { QuestionnairesService } from './questionnaires.service';
import { QuestionnairesController } from './questionnaires.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService],
  imports: [PrismaModule],
  exports: [QuestionnairesService],
})
export class QuestionnairesModule {}
