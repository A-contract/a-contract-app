import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from '../../entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) {}

  async create(role: Roles): Promise<Roles> {
    return this.roleRepository.save(role);
  }

  async findAll(): Promise<Roles[]> {
    return this.roleRepository.find();
  }

  async findOne(data: any): Promise<Roles> {
    return this.roleRepository.findOne({
      where: data,
    });
  }

  async update(id: any, role: Roles): Promise<Roles> {
    await this.roleRepository.update(id, role);
    return this.roleRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
