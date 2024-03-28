import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Contracts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

  @Column({ default: 0})
  paymentStatus: number;
}
