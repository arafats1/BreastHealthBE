import { Injectable } from '@nestjs/common';
import { CreateFollowupDto } from './dto/create-followup.dto';
import { UpdateFollowupDto } from './dto/update-followup.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowupsService {
  constructor(private prisma: PrismaService) {}
  create(createFollowupDto: CreateFollowupDto) {
    return this.prisma.followUp.create({data: createFollowupDto})
  }

  findAll() {
    return this.prisma.followUp.findMany()
  }

  findOne(id: number) {
    return this.prisma.followUp.findUnique({where: {id}})
  }

  update(id: number, updateFollowupDto: UpdateFollowupDto) {
    return this.prisma.followUp.update({where: {id}, data: updateFollowupDto})
  }

  remove(id: number) {
    return this.prisma.followUp.delete({where: {id}})
  }
}
