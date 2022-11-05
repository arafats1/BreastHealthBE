import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Interface } from "readline";

interface Questionnaire {
    question: string;
    answer: string;
}

export class CreateSignUpDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    phone : string;
    @ApiProperty()
    @IsNotEmpty()
    password: string;
    @ApiProperty({type: Array, isArray: true})
    questions: Questionnaire[];
      
}