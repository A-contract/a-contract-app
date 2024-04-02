import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Users)
    private readonly usersReposipory: Repository<Users>,
  ) {}

  async setName(userId: number, name: string, surname: string) {
    try {
      console.log(userId, name);
      await this.usersReposipory.update(
        {
          id: userId,
        },
        { name: name, surname: surname },
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
