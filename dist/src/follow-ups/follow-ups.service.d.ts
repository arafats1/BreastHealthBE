import { CreateFollowUpDto } from './dto/create-follow-up.dto';
import { UpdateFollowUpDto } from './dto/update-follow-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FollowUpsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFollowUpDto: CreateFollowUpDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFollowUpDto: UpdateFollowUpDto): string;
    remove(id: number): string;
}
