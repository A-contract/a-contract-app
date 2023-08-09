import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActivationToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  token: string;
}
