import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';
import { Roles } from './roles.entity';

@Entity()
export class UsersRoles {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id)
  user: Users;

  @ManyToOne(() => Roles, (role) => role.id)
  role: Roles;
}
