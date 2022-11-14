import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { CreateFollowupDto } from './dto/create-followup.dto';
import { UpdateFollowupDto } from './dto/update-followup.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('followups')
@ApiTags('Followups')
export class FollowupsController {
  constructor(private readonly followupsService: FollowupsService) {}

  @Get()
  @ApiOperation({ summary: 'Get the follow ups' })
  findAll() {
    return this.followupsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a follow up by id' })
  findOne(@Param('id') id: string) {
    return this.followupsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a follow up by id' })
  update(@Param('id') id: string, @Body() updateFollowupDto: UpdateFollowupDto) {
    return this.followupsService.update(+id, updateFollowupDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a follow up by id' })
  remove(@Param('id') id: string) {
    return this.followupsService.remove(+id);
  }
}
