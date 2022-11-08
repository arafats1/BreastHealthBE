import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FaqsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFaqDto: CreateFaqDto): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Faq[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    update(id: number, updateFaqDto: UpdateFaqDto): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
}
