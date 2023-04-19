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
import { Users } from '../../entities/users.entity';
import { Roles } from '../../enums/roles.decorator';
import { Roles as Role } from '../../enums/roles.enum';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Users> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: Users): Promise<Users> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: Users): Promise<Users> {
    user.id = id;
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
