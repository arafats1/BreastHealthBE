import { ApiProperty } from "@nestjs/swagger";
export class CreateQuestionnaireDto {
    @ApiProperty()
    question: string
    @ApiProperty()
    answer: string
    @ApiProperty()
    signUp:{
        connect:{
            id: number
        }
    }
}
