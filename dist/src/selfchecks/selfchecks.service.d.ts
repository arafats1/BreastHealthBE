import { CreateSelfcheckDto } from './dto/create-selfcheck.dto';
import { UpdateSelfcheckDto } from './dto/update-selfcheck.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SelfchecksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSelfcheckDto: CreateSelfcheckDto): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").SelfCheck[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    update(id: number, updateSelfcheckDto: UpdateSelfcheckDto): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SelfCheckClient<import(".prisma/client").SelfCheck, never>;
}
