import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthtipsService } from './healthtips.service';
import { CreateHealthtipDto } from './dto/create-healthtip.dto';
import { UpdateHealthtipDto } from './dto/update-healthtip.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('healthtips')
@ApiTags ('Health Tips')
export class HealthtipsController {
  constructor(private readonly healthtipsService: HealthtipsService) {}

  @Post()
  create(@Body() createHealthtipDto: CreateHealthtipDto) {
    return this.healthtipsService.create(createHealthtipDto);
  }

  @Get()
  findAll() {
    return this.healthtipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthtipsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthtipDto: UpdateHealthtipDto) {
    return this.healthtipsService.update(+id, updateHealthtipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthtipsService.remove(+id);
  }
}
