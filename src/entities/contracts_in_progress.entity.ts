import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { UsersRoles } from './users_roles';

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
  lawerId: number;

  @Column()
  pathToFile: string;

  @Column()
  datetimeStart: Date;

  @Column({ default: null, nullable: true })
  datetimeFinish: Date;

  @BeforeInsert()
  setStartDateTime() {
    this.datetimeStart = new Date();
  }
}
