import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpsModule } from './sign-ups/sign-ups.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionnairesModule } from './questionnaires/questionnaires.module';






@Module({
  imports: [PrismaModule,SignUpsModule,AuthModule, QuestionnairesModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class AppModule {}
