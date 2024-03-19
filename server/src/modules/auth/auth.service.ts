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
    private readonly userRoleRepository: Repository<UsersRoles>,
  ) {}

  async create(data: any): Promise<Users> {
    return this.userRepository.save(data);
  }

  async findOne(data: any): Promise<any> {
    const user = await this.userRepository.findOne({
      where: data,
      relations: ['userRoles', 'userRoles.role'],
    });
    return user;
  }
}
