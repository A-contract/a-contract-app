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
    ]),
    JwtModule.register({
      secret: 'abdulalhazred',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, ContractController, ContractController],
  providers: [AuthService, RoleService, ContractService],
})
export class AppModule {}
