import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleService } from '../role/role.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { Role } from '../../entities/role.entity';
import { UserRole } from '../../entities/user_roles';
import { getRepository } from 'typeorm';

@Controller('api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') roleName: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const findUser = await this.authService.findOne({ email: email });

    const findRole = await this.roleService.findOne({ name: roleName });

    if (findUser) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'This e-mail already exists',
      };
    }

    const user = await this.authService.create({
      name,
      email,
      password: hashedPassword,
    });

    delete user.password;

    const userRole = new UserRole();
    userRole.user = user;
    userRole.role = findRole;

    await getRepository(UserRole).save(userRole);

    return {
      status: HttpStatus.ACCEPTED,
      message: 'success',
    };
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.findOne({ email });

    if (!user) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid email',
      };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid pass',
      };
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, {
      httpOnly: true,
      domain: 'localhost',
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return {
      status: HttpStatus.ACCEPTED,
      message: 'success',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const user = await this.authService.findOne({ id: data['id'] });

      const { password, ...result } = user;

      return {
        status: HttpStatus.ACCEPTED,
        message: 'success',
        user: result,
      };
    } catch (e) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'success',
      };
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.cookie('jwt', '', {
      httpOnly: true,
      secure: true,
      domain: 'localhost',
      path: '/',
      sameSite: 'lax',
      expires: new Date(0),
    });

    return {
      message: 'success',
    };
  }
}
