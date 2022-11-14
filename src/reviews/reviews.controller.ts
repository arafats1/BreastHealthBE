import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('reviews')
@ApiTags ('Reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  @ApiOperation({ summary: 'Gets all reviews' })
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Gets a review by id' })
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a review by id' })
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a review by id' })
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
