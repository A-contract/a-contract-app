import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/users.entity';
import { Roles } from 'src/entities/roles.entity';
import { UsersRoles } from 'src/entities/users_roles';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Roles)
    private readonly roleRepository: Repository<Roles>,
    @InjectRepository(UsersRoles)
    private readonly userRolesRepository: Repository<UsersRoles>,
  ) {}

  async findAll(): Promise<Users[]> {
    const query = this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.userRoles', 'userRoles')
      .leftJoinAndSelect('userRoles.role', 'role')
      .getMany();

    return query;
  }
}
