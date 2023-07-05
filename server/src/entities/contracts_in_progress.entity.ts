import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { formatDateTime } from 'src/utils/dateUtils';

@Entity()
export class ContractsInProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column({ length: 50 })
  originalName: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  size: number;

  @Column()
  userId: number;

  @Column()
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
