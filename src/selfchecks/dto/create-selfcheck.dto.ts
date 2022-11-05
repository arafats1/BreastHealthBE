import { ApiProperty } from "@nestjs/swagger";
export class CreateSelfcheckDto {
    @ApiProperty()
    title: string
    @ApiProperty()
    description: string
    @ApiProperty()
    imageUrl: string
}