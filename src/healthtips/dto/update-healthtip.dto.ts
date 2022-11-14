import { PartialType } from '@nestjs/swagger';
import { CreateHealthtipDto } from './create-healthtip.dto';

export class UpdateHealthtipDto extends PartialType(CreateHealthtipDto) {}
