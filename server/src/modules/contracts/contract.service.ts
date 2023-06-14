import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contracts } from 'src/entities/contracts.entity';
import { ContractsInProgress } from 'src/entities/contracts_in_progress.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contracts)
    private readonly contractRepository: Repository<Contracts>,
    @InjectRepository(ContractsInProgress)
    private readonly contractInProgressRepository: Repository<ContractsInProgress>,
  ) {}

  async create(data: any): Promise<Contracts> {
    return this.contractRepository.save(data);
  }

  async findOne(id: number): Promise<Contracts> {
    return this.contractRepository.findOne(id);
  }

  async findAll(role: any, id: number): Promise<Contracts[]> {
    return this.contractRepository.find(
      role === 'customer' ? { where: { userId: id } } : {},
    ); //{ where: { userId: id } }
  }

  async createProcessing(data: any): Promise<ContractsInProgress> {
    return this.contractInProgressRepository.save(data);
  }

  async update(id: any, progressStatus: any): Promise<Contracts> {
    await this.contractRepository.update(id, {
      progressStatus: progressStatus,
    });
    return await this.contractRepository.findOne(id);
  }
}
