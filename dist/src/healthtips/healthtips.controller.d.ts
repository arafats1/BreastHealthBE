import { HealthtipsService } from './healthtips.service';
import { CreateHealthtipDto } from './dto/create-healthtip.dto';
import { UpdateHealthtipDto } from './dto/update-healthtip.dto';
export declare class HealthtipsController {
    private readonly healthtipsService;
    constructor(healthtipsService: HealthtipsService);
    create(createHealthtipDto: CreateHealthtipDto): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").HealthTip[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    update(id: string, updateHealthtipDto: UpdateHealthtipDto): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HealthTipClient<import(".prisma/client").HealthTip, never>;
}
