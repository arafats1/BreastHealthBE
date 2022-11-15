import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    create(createDoctorDto: CreateDoctorDto): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Doctor[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    update(id: string, updateDoctorDto: UpdateDoctorDto): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DoctorClient<import(".prisma/client").Doctor, never>;
}
