import { SignUpsService } from './sign-ups.service';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { SignUpEntity } from './entities/sign-up.entity';
import { CreateFollowupDto } from 'src/followups/dto/create-followup.dto';
export declare class SignUpsController {
    private readonly signUpsService;
    constructor(signUpsService: SignUpsService);
    findAll(): Promise<SignUpEntity[]>;
    createFollowup(id: string, createFollowupDto: CreateFollowupDto): import(".prisma/client").Prisma.Prisma__FollowUpClient<import(".prisma/client").FollowUp, never>;
    findOneByEmail(email: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    findDashboard(id: string): Promise<SignUpEntity>;
    update(id: string, updateSignUpDto: UpdateSignUpDto): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SignUpClient<import(".prisma/client").SignUp, never>;
}
