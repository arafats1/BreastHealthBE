import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelfchecksService } from './selfchecks.service';
import { CreateSelfcheckDto } from './dto/create-selfcheck.dto';
import { UpdateSelfcheckDto } from './dto/update-selfcheck.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('selfchecks')
@ApiTags('Selfchecks')
export class SelfchecksController {
  constructor(private readonly selfchecksService: SelfchecksService) {}

  @Post()
  @ApiOperation({ summary: 'Get all selfchecks' })
  @ApiBody({ type: CreateSelfcheckDto })
  create(@Body() createSelfcheckDto: CreateSelfcheckDto) {
    return this.selfchecksService.create(createSelfcheckDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all selfchecks' })
  findAll() {
    return this.selfchecksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get selfcheck by id' })
  findOne(@Param('id') id: string) {
    return this.selfchecksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update selfcheck by id' })
  update(@Param('id') id: string, @Body() updateSelfcheckDto: UpdateSelfcheckDto) {
    return this.selfchecksService.update(+id, updateSelfcheckDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete selfcheck by id' })
  remove(@Param('id') id: string) {
    return this.selfchecksService.remove(+id);
  }
}