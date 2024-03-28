import { Controller, HttpStatus, Post, Req } from "@nestjs/common";
import { SupportService } from "./support.service";


@Controller("support")
export class SupportController {
  constructor(private supportService: SupportService) {

  }

  @Post("setQuestion")
  async setQuestion(@Req() request: any) {
      try {
        const { email, question } = request.body;

        this.supportService.create(email, question);

        return {
          status: HttpStatus.OK,
          message: 'success',
        };

      }
      catch(error) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'unsuccess',
        };
      }
  }

}