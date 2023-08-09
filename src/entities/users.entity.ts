import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersRoles } from './users_roles';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  activated: boolean;

  @OneToMany(() => UsersRoles, (userRole) => userRole.user, { cascade: true })
  userRoles: UsersRoles[];

  get role(): string {
    return this.userRoles[0]?.role?.name;
  }
}
