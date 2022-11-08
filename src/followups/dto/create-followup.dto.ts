import { ApiProperty } from "@nestjs/swagger";
export class CreateFollowupDto {
    @ApiProperty()
    swellingOnLeftOrone : string
    @ApiProperty()
    unUsualDischarge : string
    @ApiProperty()
    hardSpotOnBreast : string
    @ApiProperty()
    lastPeriodDate : string
    @ApiProperty()
    daysPeriodLasted : number
    @ApiProperty()
    signUp :{
        connect:{
            id:number
        }
    }

}
