import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contracts } from 'src/entities/contracts.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contracts)
    private readonly contractRepository: Repository<Contracts>,
  ) {}

  async create(data: any): Promise<Contracts> {
    return this.contractRepository.save(data);
  }

  async findAll(id: number): Promise<Contracts[]> {
    return this.contractRepository.find({ where: { userId: id } });
  }
}
