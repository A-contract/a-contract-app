import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Contracts } from 'src/entities/contracts.entity';
import { ContractsInProgress } from 'src/entities/contracts_in_progress.entity';
import { formatDateTime } from 'src/utils/dateUtils';
import { Users } from 'src/entities/users.entity';
import { Roles } from 'src/entities/roles.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Roles)
    private readonly roleRepository: Repository<Roles>,
  ) {}

  //   async findAll(role: any, id: number): Promise<Contracts[]> {
  //     const query = this.userRepository
  //       .createQueryBuilder('contracts')
  //       .select(['contracts'])
  //       .leftJoin(
  //         'contracts_in_progress',
  //         'contracts_in_progress',
  //         'contracts_in_progress.contractId = contracts.id',
  //       );
  //     if (role === 'customer') {
  //       query.where('contracts.userId = :id', { id });
  //     } else if (role === 'lawyer') {
  //       query
  //         .where('contracts_in_progress.lawyerId = :id', { id })
  //         .orWhere('contracts.paymentStatus = 1');
  //     }

  //     return await query.getMany();
  //   }
}
