import { ApiProperty } from "@nestjs/swagger";
export class CreateHealthtipDto {
    @ApiProperty()
    title: string
    @ApiProperty()
    description: string
    @ApiProperty()
    imageUrl: string
}
