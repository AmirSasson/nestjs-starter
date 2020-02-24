import { Injectable, Query } from "@nestjs/common";
import { ReqTest } from "src/controllers/web-contracts/models";

@Injectable()
export class AppService {
  getHello(req: ReqTest): string {
    return `Hello ${req.lastName}, ${req.firstName}, account: ${req.accountId}!`;
  }
}
