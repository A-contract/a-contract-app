import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Contracts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ length: 50 })
  originalName: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  size: number;

  @Column()
  dateUploaded: Date;

  @Column()
  pathToFile: string;

  @Column()
  progressStatus: string;

  @Column()
  paymentStatus: boolean;
}
