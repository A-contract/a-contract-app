import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { UsersRoles } from 'src/entities/users_roles';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    @InjectRepository(UsersRoles)
    private readonly userRoleRepository: Repository<UsersRoles>, // инжектируем репозиторий для UserRole
  ) {}

  async create(data: any): Promise<Users> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<Users> {
    const user = await this.userRepository.findOne(condition, {
      relations: ['userRoles', 'userRoles.role'],
    });
    return user;
  }
}
