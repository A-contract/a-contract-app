import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Users } from '../../entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { ActivationToken } from 'src/entities/activation_token.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    @InjectRepository(ActivationToken)
    private readonly activationTokenRepository: Repository<ActivationToken>,
    private readonly jwtService: JwtService,
  ) {}

  async create(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: any): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  async update(id: any, user: Users): Promise<Users> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  // Activation token ----------------

  async createActivationToken(userId: number): Promise<string> {
    const payload = { id: userId };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '10m',
    });
    const entry = {
      userId: userId,
      token: token,
    };
    const result = this.activationTokenRepository.save(entry);
    return token;
  }

  async activateUser(payload: any, token: any): Promise<boolean> {
    const userId = payload.id;
    const result = await this.activationTokenRepository.delete({
      token: token,
    });
    if (result.affected === 0) return false;

    await this.userRepository.update({ id: userId }, { activated: true });
    return true;
  }
}
