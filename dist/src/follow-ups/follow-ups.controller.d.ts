import { FollowUpsService } from './follow-ups.service';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
import { UpdateFollowUpDto } from './dto/update-follow-up.dto';
export declare class FollowUpsController {
    private readonly followUpsService;
    constructor(followUpsService: FollowUpsService);
    create(createFollowUpDto: CreateFollowUpDto): void;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFollowUpDto: UpdateFollowUpDto): string;
    remove(id: string): string;
}
