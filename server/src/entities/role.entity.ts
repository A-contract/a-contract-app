import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRole } from './user_roles';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ default: '' })
  permissions: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role, { cascade: true })
  userRoles: UserRole[];
}
