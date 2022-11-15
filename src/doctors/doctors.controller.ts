import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
@ApiTags ('Doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiOperation({summary: 'Post a new doctor'})
  @ApiBody({type: CreateDoctorDto})
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiOperation({summary: 'Get all doctors'})
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Gets a doctor by id'})
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Updates a doctor by id'})
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletes a doctor by id'})
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(+id);
  }
}
