import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { Roles } from '../../enums/roles.decorator';
import { Roles as Role } from '../../enums/roles.enum';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post()
  // @Roles('roles', [Role.ADMIN]) //<-- I dont know how i cam make it!
  // //What does it mean? it is mean that U have to create controller for access control.
  // //I have three roles.
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    user.id = id;
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
