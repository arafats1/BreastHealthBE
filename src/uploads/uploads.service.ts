import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { identity } from 'rxjs';


@Injectable()
export class UploadsService {
  constructor(private prisma: PrismaService, private cloudinary: CloudinaryService) {}
  async uploadImageToCloudinary(id: number, file: Express.Multer.File) {
    const result = await this.cloudinary.uploadFile(file);
    if (result.error) {
      return result;
    }
    const upload = await this.prisma.upload.create({
      data: {
        url: result.url,
        signUp: {
          connect: {
            id,
          },
        }
      },
    });

  }

  create(createUploadDto: CreateUploadDto) {
    return this.prisma.upload.create({data: createUploadDto})
  }

  findAll() {
    return this.prisma.upload.findMany();
  }
}
