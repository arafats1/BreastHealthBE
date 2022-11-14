import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('faqs')
@ApiTags('Faqs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new faq' })
  @ApiBody({ type: CreateFaqDto })
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqsService.create(createFaqDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all faqs' })
  findAll() {
    return this.faqsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a faq by id' })
  findOne(@Param('id') id: string) {
    return this.faqsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a faq by id' })
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqsService.update(+id, updateFaqDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a faq by id' })
  remove(@Param('id') id: string) {
    return this.faqsService.remove(+id);
  }
}
