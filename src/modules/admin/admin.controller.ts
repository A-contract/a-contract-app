import { Controller, Get, HttpStatus, Post, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from '../role/role.service';
import { AuthService } from '../auth/auth.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
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

      const users: any = await this.adminService.findAll();
      return {
        users: users.map((element: any, index: number) => ({
          userId: element.id,
          name: element.name,
          surname: element.surname,
          username: element.username,
          email: element.email,
          roleId: element.userRoles[0].role.id,
          roleName: element.userRoles[0].role.name,
        })),
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
