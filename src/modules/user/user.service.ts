import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  // Activation token ----------------

  async createActivationToken(userId: number): Promise<string> {
    const payload = { id: userId };
    const token = await this.jwtService.signAsync(payload, { expiresIn: '1d' });
    const entry = {
      userId: userId,
      token: token,
    };
    this.activationTokenRepository.create(entry);
    return token;
  }

  async activateUser(payload: any): Promise<void> {
    const userId = payload.id;
    await this.activationTokenRepository.delete({ userId: userId });
    await this.userRepository.update({ id: userId }, { activated: true });
  }
}
