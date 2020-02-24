

import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsString, IsNumberString, IsDateString } from "class-validator";
import { Query } from "@nestjs/common";

export class ReqTest {
    @ApiProperty()
    // @ApiQuery({ name: "fname", enum: UserRole })
    // @Query('fname')
    firstName: string;

    @ApiProperty()
    // @Query('lname')
    lastName: string;

    @IsNumberString()
    @ApiProperty({ name: "account_id" })
    account_id: string;

    // @IsDateString()
    // @ApiProperty({ name: "account_id" })
    // account_id: string;

    get accountId(): number {
        return Number(this.account_id);
    }
}