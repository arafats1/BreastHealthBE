import { Controller, Get, Post, Body, Patch, Param, Delete, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { SignUpsService } from './sign-ups.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SignUpEntity } from './entities/sign-up.entity';
import { CreateQuestionnaireDto } from 'src/questionnaires/dto/create-questionnaire.dto';

@Controller('')
@ApiTags('Users')
export class SignUpsController {
  
  constructor(private readonly signUpsService: SignUpsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('users')
  @ApiOperation({ summary: 'Displays all users of the system' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  async findAll(): Promise<SignUpEntity[]> {
    const signUps = await this.signUpsService.findAll();
    return signUps.map((signUp) => new SignUpEntity(signUp));
  }

  // @Post('users/:id/questions')
  // @ApiOperation({ summary: 'Creates a questionnaire' })
  // @ApiBody({ 
  //   schema: {
  //     type: 'array',
  //     example: [
  //       {
  //         question: 'Any sweling on your left orone part of the breast?',
  //         answer: 'No',
  //       },
  //       {
  //         question: 'Have you detected any lumps?',
  //         answer: 'Yes',
  //       }
  //     ]
  //   },
  //   })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Created',
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: 'Forbidden',
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Internal server error',
  // })
  // createQuestionnaire(@Param('id') id: string, @Body() createQuestionnaireDto: CreateQuestionnaireDto) {
  //   return this.signUpsService.createQuestionnaire(+id, createQuestionnaireDto);
  // }

  // @Post('users/:id/followup')
  // @ApiOperation({ summary: 'Creates a follow up questions' })
  // @ApiBody({ 
  //   schema: {
  //     type: 'array',
  //     example: [
  //       {
  //         question: 'Any sweling on your left orone part of the breast?',
  //         answer: 'No',
  //       },
  //       {
  //         question: 'Have you detected any lumps?',
  //         answer: 'Yes',
  //       }
  //     ]
  //   },
  //   })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Created',
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: 'Forbidden',
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Internal server error',
  // })
  // createFollowup(@Param('id') id: string, @Body() createQuestionnaireDto: CreateQuestionnaireDto) {
  //   return this.signUpsService.createQuestionnaire(+id, createQuestionnaireDto);
  // }


  findOneByEmail(@Param('email') email: string) {
    return this.signUpsService.findOneByEmail(email);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('users/:id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  async findDashboard(@Param('id') id: string): Promise<SignUpEntity> {
    return new SignUpEntity(
      await this.signUpsService.findOne(+id),
    );
    // return this.signUpsService.findOne(+id);
  }


  @Patch('users/:id')
  @ApiOperation({ summary: 'Update specific user information' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  update(@Param('id') id: string, @Body() updateSignUpDto: UpdateSignUpDto) {
    return this.signUpsService.update(+id, updateSignUpDto);
  }

  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete specific user' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successful', 
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiResponse({ 
    status: 403, 
    description: 'Forbidden', 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error', 
  })
  remove(@Param('id') id: string) {
    return this.signUpsService.remove(+id);
  }

}
