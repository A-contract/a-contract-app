import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Contracts } from 'src/entities/contracts.entity';
import { ContractsInProgress } from 'src/entities/contracts_in_progress.entity';
import { formatDateTime } from 'src/utils/dateUtils';

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
    const query = this.contractRepository
      .createQueryBuilder('contracts')
      .select(['contracts'])
      .leftJoin(
        'contracts_in_progress',
        'contracts_in_progress',
        'contracts_in_progress.contractId = contracts.id',
      );
    if (role === 'customer') {
      query.where('contracts.userId = :id', { id });
    } else if (role === 'lawyer') {
      query
        .where('contracts_in_progress.lawyerId = :id', { id })
        .orWhere('contracts.paymentStatus = 1');
    }

    return await query.getMany();
  }

  async createProcessing(data: any): Promise<ContractsInProgress> {
    //console.log(data);
    return this.contractInProgressRepository.save(data);
  }

  async update(id: any, progressStatus: any): Promise<Contracts> {
    //console.log(id);
    await this.contractRepository.update(id, {
      progressStatus: progressStatus,
    });
    return await this.contractRepository.findOne(id);
  }

  async finish(id: any, progressStatus: any): Promise<Contracts> {
    await this.contractInProgressRepository.update(
      { datetimeFinish: new Date(formatDateTime()) },
      { contractId: id },
    );
    await this.contractRepository.update(id, {
      progressStatus: progressStatus,
    });
    return await this.contractRepository.findOne(id);
  }

  async findSelected(lawyerId: number): Promise<ContractsInProgress> {
    const selectedContract = await this.contractInProgressRepository
      .createQueryBuilder('contracts_in_progress')
      .leftJoin(
        'contracts',
        'contracts',
        'contracts.id = contracts_in_progress.contractId',
      )
      .where('contracts.progressStatus = :status', { status: 1 })
      .andWhere('contracts_in_progress.lawyerId = :lawyerId', { lawyerId })
      .getOne();
    return selectedContract;
  }
}
