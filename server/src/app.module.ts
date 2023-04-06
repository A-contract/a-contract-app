// import { Module } from '@nestjs/common';
// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';
// import { Role } from './entities/role.entity';
// import { UserRole } from './entities/user_roles';
// import { AuthController } from './modules/auth/auth.controller';
// import { AuthService } from './modules/auth/auth.service';
// import { RoleService } from './modules/role/role.service';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'nest_auth',
//       entities: [User, Role, UserRole],
//       synchronize: true,
//     }),
//     TypeOrmModule.forFeature([User, Role, UserRole]),

//     JwtModule.register({
//       global: true,
//       secret: process.env.JWT_SECRET_KEY,
//       signOptions: { expiresIn: '1d' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, RoleService, JwtService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { UserRole } from './entities/user_roles';
import { RoleService } from './modules/role/role.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_auth',
      entities: [User, Role, UserRole],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Role, UserRole]),
    JwtModule.register({
      secret: 'abdulalhazred',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, RoleService],
})
export class AppModule {}
