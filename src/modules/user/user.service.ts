import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async create(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  async update(id: number, user: Users): Promise<Users> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
