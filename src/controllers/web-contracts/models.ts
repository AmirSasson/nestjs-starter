

import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsString, IsNumberString, IsDateString, IsNumber } from "class-validator";
import { Transform } from "class-transformer";
import * as  moment from "moment";

export class ReqTest {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @Transform((v) => Number(v))
    @IsNumber()
    @ApiProperty({ name: "accountId" })
    accountId: number;

    @Transform((v) => moment(v))
    @ApiProperty({ type: String, example: "2020-12-31" })
    startDate: moment.Moment;

    @Transform((v: string) => v.split(",").map(Number))
    @ApiProperty({ type: String, example: "3,4,5" })
    csvArr: number[];
}