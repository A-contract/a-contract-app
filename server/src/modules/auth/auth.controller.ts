import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleService } from '../role/role.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { UsersRoles } from '../../entities/users_roles';
import { Repository, getRepository } from 'typeorm';
import { MailerService } from '../mailer/mailer.service';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
    private readonly mailerService: MailerService,
    private readonly userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(UsersRoles)
    private usersRolesRepository: Repository<UsersRoles>,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('surname') surname: string,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') roleName: string,
  ) {
    console.log(email, roleName);
    const hashedPassword = await bcrypt.hash(password, 12);
    const findUser = await this.authService.findOne({ email: email });
    const findRole = await this.roleService.findOne({ name: roleName });

    if (findUser) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'This e-mail already exists',
      };
    } else {
      const user = await this.authService.create({
        name: name,
        surname: surname,
        username: username,
        email: email,
        password: hashedPassword,
        activated: false,
      });

      delete user.password;

      const usersRoles = new UsersRoles();
      usersRoles.user = user;
      usersRoles.role = findRole;

      await this.usersRolesRepository.save(usersRoles);

      const token = await this.userService.createActivationToken(user.id);

      const createdEmail = await this.mailerService.createEmail(
        roleName,
        email,
        password,
        token,
      );

      this.mailerService.sendEmail(
        createdEmail.email,
        createdEmail.headerEmail,
        createdEmail.contentEmail,
      );

      return {
        status: HttpStatus.OK,
        message: 'success',
      };
    }
  }

  @Get('activate/:token')
  async activateUser(@Param('token') token: string) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload) {
        const result = await this.userService.activateUser(payload, token);
        if (result) {
          return {
            status: HttpStatus.OK,
            message: 'Account activated successfully',
          };
        } else {
          return {
            status: HttpStatus.BAD_REQUEST,
            message: 'Failed',
          };
        }
      } else
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Failed',
        };
    } catch (error: any) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Failed',
      };
    }
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

    if (!user.activated) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Account is not activated',
      };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid pass',
      };
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt-a.contract', jwt, {
      httpOnly: true,
      domain: process.env.SERVER_HOST,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    let route = '';

    if (user.role === 'admin') route = 'admin-page';
    else if (user.role === 'customer' || user.role === 'lawyer')
      route = 'cabinet';
    else route = 'auth';

    return {
      status: HttpStatus.OK,
      message: 'success',
      route: route,
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
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

      const user: any = await this.authService.findOne({ id: data['id'] });

      const { name, surname, username, email, role } = user;

      if (role === 'admin') user.route = 'admin-page';
      else if (role === 'lawyer' || role === 'customer') user.route = 'cabinet';
      else user.route = 'auth';

      return {
        status: HttpStatus.OK,
        message: 'success',
        user: { name, surname, username, email, role },
        route: user.route,
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
    response.cookie('jwt-a.contract', '', {
      httpOnly: true,
      secure: true,
      domain: process.env.SERVER_HOST,
      path: '/',
      sameSite: 'lax',
      expires: new Date(0),
    });

    return {
      message: 'success',
    };
  }
}
