import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    update(id: string, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
