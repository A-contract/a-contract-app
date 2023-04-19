import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Roles } from '../../entities/roles.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async create(@Body() role: Roles): Promise<Roles> {
    return this.roleService.create(role);
  }

  @Get()
  async findAll(): Promise<Roles[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Roles> {
    return this.roleService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() role: Roles): Promise<Roles> {
    return this.roleService.update(id, role);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.roleService.remove(id);
  }
}
