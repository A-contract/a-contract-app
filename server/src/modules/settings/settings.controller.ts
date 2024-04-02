import { Controller, HttpStatus, Post, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(
    private jwtService: JwtService,
    private settingsService: SettingsService,
  ) {}

  @Post('setFullName')
  async setName(@Req() request: any) {
    try {
      const user = await this.jwtService.verifyAsync(
        request.cookies['jwt-a.contract'],
      );

      if (!user) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'unsuccess',
        };
      }

      const { name, surname } = request.body;

      await this.settingsService.setName(user.id, name, surname);

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
