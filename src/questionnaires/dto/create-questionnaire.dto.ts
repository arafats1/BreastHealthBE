import { ApiProperty } from "@nestjs/swagger";


export class CreateQuestionnaireDto {
    @ApiProperty()
    gender: string;
    @ApiProperty()
    ageRange: string;
    @ApiProperty()
    district: string;
    @ApiProperty()
    educationLevel: string;
    @ApiProperty()
    breastCondition: string;
    @ApiProperty()
    knowSomeoneWithBreastCondition: string;
    @ApiProperty()
    yourMotivation : string;
    
    
    @ApiProperty()
    signUp:{
        connect:{
            id: number
        }
    }
}