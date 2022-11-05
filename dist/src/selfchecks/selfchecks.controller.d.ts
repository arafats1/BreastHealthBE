import { SelfchecksService } from './selfchecks.service';
import { CreateSelfcheckDto } from './dto/create-selfcheck.dto';
import { UpdateSelfcheckDto } from './dto/update-selfcheck.dto';
export declare class SelfchecksController {
    private readonly selfchecksService;
    constructor(selfchecksService: SelfchecksService);
    create(createSelfcheckDto: CreateSelfcheckDto): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").SelfCheck[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    update(id: string, updateSelfcheckDto: UpdateSelfcheckDto): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
}
