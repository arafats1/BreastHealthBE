import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDoctorDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string
    @ApiProperty()
    type: string
    @ApiProperty()
    @IsNotEmpty()
    phone: string
    @ApiProperty()
    @IsEmail()
    email : string
    @ApiProperty()
    address : string
    @ApiProperty()
    hospital : string
    @ApiProperty()
    practiceId : string
}
