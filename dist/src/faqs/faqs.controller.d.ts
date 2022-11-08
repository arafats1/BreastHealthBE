import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
export declare class FaqsController {
    private readonly faqsService;
    constructor(faqsService: FaqsService);
    create(createFaqDto: CreateFaqDto): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Faq[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    update(id: string, updateFaqDto: UpdateFaqDto): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FaqClient<import(".prisma/client").Faq, never>;
}
