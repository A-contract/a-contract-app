import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Support } from 'src/entities/support.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private supportRepository: Repository<Support>,
  ) {}

  async create(email: string, question: string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    this.supportRepository.save({
      email: email,
      question: question,
      dateQuestion: formattedDate,
    });
  }
}
