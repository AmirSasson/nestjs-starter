import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from "../services/app.service";
import { ReqTest } from "./web-contracts/models";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("App")
@Controller("api/app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("hello")
  getHello(@Query() req: ReqTest): string {
    return this.appService.getHello(req);
  }
}
