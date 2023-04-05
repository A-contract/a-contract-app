import { Module, RequestMethod } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './modules/auth/auth.controller';
import { User } from './entities/user.entity';
import { AuthService } from './modules/auth/auth.service';
import { Role } from './entities/role.entity';
import { UserRole } from './entities/user_roles';
import { RoleService } from './modules/role/role.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

//

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
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_KEY'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, RoleService, JwtService],
})
export class AppModule {}
