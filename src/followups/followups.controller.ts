import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { CreateFollowupDto } from './dto/create-followup.dto';
import { UpdateFollowupDto } from './dto/update-followup.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('followups')
@ApiTags('Followups')
export class FollowupsController {
  constructor(private readonly followupsService: FollowupsService) {}

  @Get()
  findAll() {
    return this.followupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowupDto: UpdateFollowupDto) {
    return this.followupsService.update(+id, updateFollowupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followupsService.remove(+id);
  }
}
