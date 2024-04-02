import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Contracts {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  userId: number;

  @Column({ length: 1000 })
  originalName: string;

  @Column({ length: 1000 })
  name: string;

  @Column()
  size: number;

  @Column()
  dateUploaded: Date;

  @Column()
  pathToFile: string;

  @Column()
  progressStatus: number;

  @Column({ default: 0 })
  paymentStatus: number;
}
