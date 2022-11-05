import { Injectable } from '@nestjs/common';
import { CreateSelfcheckDto } from './dto/create-selfcheck.dto';
import { UpdateSelfcheckDto } from './dto/update-selfcheck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SelfchecksService {
  constructor(private prisma: PrismaService) {}
  create(createSelfcheckDto: CreateSelfcheckDto) {
    return this.prisma.selfCheck.create({ data: createSelfcheckDto });
  }

  findAll() {
    return this.prisma.selfCheck.findMany();
  }

  findOne(id: number) {
    return this.prisma.selfCheck.findUnique({ where: { id } });
  }

  update(id: number, updateSelfcheckDto: UpdateSelfcheckDto) {
    return this.prisma.selfCheck.update({
      where: { id },
      data: updateSelfcheckDto,
    });

  }

  remove(id: number) {
    return this.prisma.selfCheck.delete({ where: { id } });
  }
}