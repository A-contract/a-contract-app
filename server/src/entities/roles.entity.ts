import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UsersRoles } from './users_roles';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ default: '' })
  permissions: string;

  @OneToMany(() => UsersRoles, (userRole) => userRole.role, { cascade: true })
  userRoles: UsersRoles[];
}
