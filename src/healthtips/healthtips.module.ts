import { Module } from '@nestjs/common';
import { HealthtipsService } from './healthtips.service';
import { HealthtipsController } from './healthtips.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HealthtipsController],
  providers: [HealthtipsService],
  imports: [PrismaModule],
  exports: [HealthtipsService],
})
export class HealthtipsModule {}
