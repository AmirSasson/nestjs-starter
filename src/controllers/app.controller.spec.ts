import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "../services/app.service";
import { ReqTest } from "./web-contracts/models";
import { APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should return \"Hello World!\"", () => {
      expect(appController.getHello(Object.assign(new ReqTest(), { firstName: "amir", lastName: "sasson", account_id: 1 })))
        .toBe("Hello sasson, amir, account: 1!");
    });
  });
});
