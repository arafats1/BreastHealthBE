import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Review[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    update(id: number, updateReviewDto: UpdateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
}
