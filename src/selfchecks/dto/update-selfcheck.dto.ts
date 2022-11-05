import { PartialType } from '@nestjs/swagger';
import { CreateSelfcheckDto } from './create-selfcheck.dto';

export class UpdateSelfcheckDto extends PartialType(CreateSelfcheckDto) {}
