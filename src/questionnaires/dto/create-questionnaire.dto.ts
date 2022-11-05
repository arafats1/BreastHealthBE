import { ApiProperty } from "@nestjs/swagger";


export class CreateQuestionnaireDto {
    @ApiProperty({
        isArray: true,
        type: String,
    })
    question: string;

    @ApiProperty({
        isArray: true,
        type: String,
    })
    answer: string;
    
    
    @ApiProperty()
    signUp:{
        connect:{
            id: number
        }
    }
}