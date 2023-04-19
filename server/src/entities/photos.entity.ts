import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UsersRoles } from './users_roles';

@Entity()
export class Photos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column({ length: 50 })
  name: string;

  @Column({ type: 'bigint' })
  size: BigInt;

  @Column()
  pathToFile: string;

  @Column()
  dateUploaded: Date;
}
