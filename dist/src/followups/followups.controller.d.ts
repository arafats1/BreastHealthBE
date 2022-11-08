import { FollowupsService } from './followups.service';
import { UpdateFollowupDto } from './dto/update-followup.dto';
export declare class FollowupsController {
    private readonly followupsService;
    constructor(followupsService: FollowupsService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").FollowUp[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    update(id: string, updateFollowupDto: UpdateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
}
