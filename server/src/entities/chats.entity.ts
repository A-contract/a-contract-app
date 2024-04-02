import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Chats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Users)
  @JoinColumn()
  user: Users;

  @Column({ default: null })
  userId: number;

  @ManyToOne(() => Users)
  @JoinColumn()
  admin: Users;

  @Column({ default: null })
  adminId: number;

  @Column()
  dateCreated: Date;
}
