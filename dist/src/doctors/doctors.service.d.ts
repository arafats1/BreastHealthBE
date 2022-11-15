import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DoctorsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDoctorDto: CreateDoctorDto): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Doctor[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    update(id: number, updateDoctorDto: UpdateDoctorDto): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
}
