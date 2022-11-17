import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';


@Module({
  controllers: [UploadsController],
  providers: [UploadsService],
  imports: [CloudinaryModule, PrismaModule],
  exports: [UploadsService],
})
export class UploadsModule {}
