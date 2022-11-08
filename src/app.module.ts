import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpsModule } from './sign-ups/sign-ups.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';
import { SelfchecksModule } from './selfchecks/selfchecks.module';
import { ArticlesModule } from './articles/articles.module';
import { FaqsModule } from './faqs/faqs.module';
import { FollowupsModule } from './followups/followups.module';






@Module({
  imports: [PrismaModule,SignUpsModule,AuthModule, QuestionnairesModule, SelfchecksModule, ArticlesModule, FaqsModule, FollowupsModule, ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class AppModule {}
