import { Injectable } from '@nestjs/common';
import { CreateHealthtipDto } from './dto/create-healthtip.dto';
import { UpdateHealthtipDto } from './dto/update-healthtip.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HealthtipsService {
  constructor(private prisma: PrismaService) {}
  create(createHealthtipDto: CreateHealthtipDto) {
    return this.prisma.healthTip.create({data: createHealthtipDto})
  }

  findAll() {
    return this.prisma.healthTip.findMany()
  }

  findOne(id: number) {
    return this.prisma.healthTip.findUnique({where: {id}})
  }

  update(id: number, updateHealthtipDto: UpdateHealthtipDto) {
    return this.prisma.healthTip.update({where: {id}, data: updateHealthtipDto})
  }

  remove(id: number) {
    return this.prisma.healthTip.delete({where: {id}})
  }
}
