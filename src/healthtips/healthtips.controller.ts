import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthtipsService } from './healthtips.service';
import { CreateHealthtipDto } from './dto/create-healthtip.dto';
import { UpdateHealthtipDto } from './dto/update-healthtip.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('healthtips')
@ApiTags ('Health Tips')
export class HealthtipsController {
  constructor(private readonly healthtipsService: HealthtipsService) {}

  @Post()
  @ApiOperation({summary: 'Posts a new health tip'})
  create(@Body() createHealthtipDto: CreateHealthtipDto) {
    return this.healthtipsService.create(createHealthtipDto);
  }

  @Get()
  @ApiOperation({summary: 'Gets all health tips'})
  findAll() {
    return this.healthtipsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Gets a health tip by id'})
  findOne(@Param('id') id: string) {
    return this.healthtipsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Updates a health tip by id'})
  update(@Param('id') id: string, @Body() updateHealthtipDto: UpdateHealthtipDto) {
    return this.healthtipsService.update(+id, updateHealthtipDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletes a health tip by id'})
  remove(@Param('id') id: string) {
    return this.healthtipsService.remove(+id);
  }
}
