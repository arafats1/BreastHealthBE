import { Module } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { FollowupsController } from './followups.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FollowupsController],
  providers: [FollowupsService],
  imports: [PrismaModule],
  exports: [FollowupsService],
})
export class FollowupsModule {}
