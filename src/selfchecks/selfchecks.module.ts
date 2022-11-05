import { Module } from '@nestjs/common';
import { SelfchecksService } from './selfchecks.service';
import { SelfchecksController } from './selfchecks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SelfchecksController],
  providers: [SelfchecksService],
  imports: [PrismaModule],
  exports: [SelfchecksService],
})
export class SelfchecksModule {}