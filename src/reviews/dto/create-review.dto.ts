import { ApiProperty } from "@nestjs/swagger";
export class CreateReviewDto {
    @ApiProperty()
    review : string
    @ApiProperty()
    signUp: {
        connect: {
            id: number
        }
    }
  
}
