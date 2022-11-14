import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Review[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    update(id: string, updateReviewDto: UpdateReviewDto): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ReviewClient<import(".prisma/client").Review, never>;
}
