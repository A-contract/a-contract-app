import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Chats } from './chats.entity';
import { Users } from './users.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chats)
  @JoinColumn()
  chat: Chats;

  @Column({ default: null })
  chatId: number;

  @ManyToOne(() => Users)
  @JoinColumn()
  sender: Users;

  @Column({ default: null })
  senderId: number;

  @Column()
  message: string;

  @Column()
  dateCreated: Date;
}
