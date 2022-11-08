import { CreateFollowupDto } from './dto/create-followup.dto';
import { UpdateFollowupDto } from './dto/update-followup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FollowupsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFollowupDto: CreateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").FollowUp[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    update(id: number, updateFollowupDto: UpdateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
}
