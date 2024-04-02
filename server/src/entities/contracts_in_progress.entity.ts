import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { formatDateTime } from 'src/utils/dateUtils';
import { Users } from './users.entity';
import { Contracts } from './contracts.entity';

@Entity()
export class ContractsInProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contracts)
  @JoinColumn({ name: 'contractId' })
  contractId: number;

  @Column({ length: 50 })
  originalName: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  size: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  userId: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'lawyerId' })
  lawyerId: number;

  @Column()
  pathToFile: string;

  @Column()
  datetimeStart: Date;

  @Column({ default: null, nullable: true })
  datetimeFinish: Date;

  @BeforeInsert()
  setStartDateTime() {
    this.datetimeStart = new Date(formatDateTime());
  }
}
