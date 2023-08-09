import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { RoleService } from './modules/role/role.service';
import { ContractController } from './modules/contracts/contract.controller';
import { Users } from './entities/users.entity';
import { Roles } from './entities/roles.entity';
import { UsersRoles } from './entities/users_roles';
import { Contracts } from './entities/contracts.entity';
import { ContractsInProgress } from './entities/contracts_in_progress.entity';
import { Photos } from './entities/photos.entity';
import { ContractService } from './modules/contracts/contract.service';
import { AdminController } from './modules/admin/admin.controller';
import { AdminService } from './modules/admin/admin.service';
import { MailerService } from './modules/mailer/mailer.service';
import { ActivationToken } from './entities/activation_token.entity';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_auth',
      entities: [
        Users,
        Roles,
        UsersRoles,
        Contracts,
        ContractsInProgress,
        Photos,
        ActivationToken,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Users,
      Roles,
      UsersRoles,
      Contracts,
      ContractsInProgress,
      Photos,
      ActivationToken,
    ]),
    JwtModule.register({
      secret: 'abdulalhazred',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    AuthController,
    ContractController,
    ContractController,
    AdminController,
    UserController,
  ],
  providers: [
    AuthService,
    UserService,
    RoleService,
    ContractService,
    AdminService,
    MailerService,
  ],
})
export class AppModule {}
