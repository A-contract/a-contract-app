import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Support {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  question: string;
  
  @Column()
  dateQuestion: Date;

  @Column({ default: 0 })
  responseStatus: number;
}