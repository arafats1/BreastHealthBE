
import { Injectable } from '@nestjs/common';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as brypt from 'bcrypt';
import { CreateQuestionnaireDto } from 'src/questionnaires/dto/create-questionnaire.dto';

@Injectable()
export class SignUpsService {
  constructor(private prisma: PrismaService) {}
  create(createSignUpDto: CreateSignUpDto) {
    const saltOrRounds = 10;
    const password = createSignUpDto.password;
    const salt = brypt.genSaltSync(saltOrRounds);
    const hash = brypt.hashSync(password, salt);
    createSignUpDto.password = hash;
    return this.prisma.signUp.create({ 
      data: {
        email: createSignUpDto.email,
        firstName: createSignUpDto.firstName,
        lastName: createSignUpDto.lastName,
        phone: createSignUpDto.phone,
        password: createSignUpDto.password,
        questions: {
          create: createSignUpDto.questions,
        },
        
      }
    });
  }

  // createQuestionnaire(id:number, createQuestionnaireDto: CreateQuestionnaireDto) {
  //   return this.prisma.signUp.update({
  //     where: { id: id },
  //     data: {
  //       questions: {
  //         create: createQuestionnaireDto,
  //       },
  //     },
  //   });
  // }

  // createFollowup(id:number, createQuestionnaireDto: CreateQuestionnaireDto) {
  //   return this.prisma.signUp.update({
  //     where: { id: id },
  //     data: {
  //       questions: {
  //         create: createQuestionnaireDto,
  //       },
  //     },
  //   });
  // }

  findAll() {
    //Return data from signUp table, user table and its foreign key
    return this.prisma.signUp.findMany({include:{questions:{select:{gender:true, ageRange:true, district:true, educationLevel:true, breastCondition:true, knowSomeoneWithBreastCondition:true, yourMotivation:true}}}});
  }

  findOne(id: number) {
    return this.prisma.signUp.findUnique( {where: {id: id},include:{questions:{select:{gender:true, ageRange:true, district:true, educationLevel:true, breastCondition:true, knowSomeoneWithBreastCondition:true, yourMotivation:true }}} });

  }
  findOneByEmail(email: string) {
    return this.prisma.signUp.findUnique({ where: { email: email } });
  }
 
  update(id: number, updateSignUpDto: UpdateSignUpDto) {
    return this.prisma.signUp.update({ where: { id }, data: updateSignUpDto });
  }

  remove(id: number) {
    return this.prisma.signUp.delete({ where: { id } });
  }
}
