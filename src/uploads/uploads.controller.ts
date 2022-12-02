import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadsService.create(createUploadDto);
  // }


  @Get()
  findAll() {
    return this.uploadsService.findAll();
  }

}
