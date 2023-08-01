import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from '../role/role.service';
import { AuthService } from '../auth/auth.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
    private jwtService: JwtService,
  ) {}

  @Get('users')
  async getUsers(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);
      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      //const users: any = await this.adminService.findOne(request.body.id);

      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }
}
