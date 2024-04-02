import { Controller, Get, HttpStatus, Post, Req } from '@nestjs/common';
import { SupportService } from './support.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Controller('support')
export class SupportController {
  constructor(
    private jwtService: JwtService,
    private supportService: SupportService,
  ) {}

  @Post('setQuestion')
  async setQuestion(@Req() request: any) {
    try {
      const { email, question } = request.body;

      this.supportService.create(email, question);

      return {
        status: HttpStatus.OK,
        message: 'success',
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Post('getChat')
  async getChat(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(
        request.cookies['jwt-a.contract'],
      );

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const { id } = data;

      const chat = await this.supportService.getChat(id);

      const messages = await this.supportService.getMessages(chat);
      console.log(messages);

      return {
        chat: chat ? chat : false,
        messages: messages ? messages : false,
        status: HttpStatus.OK,
        message: 'success',
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Post('startChat')
  async startChat(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(
        request.cookies['jwt-a.contract'],
      );

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const { id } = data;

      this.supportService.startChat(id);

      return {
        status: HttpStatus.OK,
        message: 'success',
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Post('sendMessage')
  async sendMessage(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(
        request.cookies['jwt-a.contract'],
      );

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const { message, chatId } = request.body;

      const { id: userId } = data;

      this.supportService.sendMessage(userId, chatId, message);

      return {
        status: HttpStatus.OK,
        message: 'success',
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }
}
