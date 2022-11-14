import { CreateHealthtipDto } from './dto/create-healthtip.dto';
import { UpdateHealthtipDto } from './dto/update-healthtip.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class HealthtipsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createHealthtipDto: CreateHealthtipDto): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").HealthTip[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    update(id: number, updateHealthtipDto: UpdateHealthtipDto): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
}
