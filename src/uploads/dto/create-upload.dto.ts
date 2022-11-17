import { ApiProperty } from "@nestjs/swagger";
export class CreateUploadDto {
    @ApiProperty()
    url: string;
    @ApiProperty()
    signUp :{
        connect: {
            id: number;
        }
    }
}
