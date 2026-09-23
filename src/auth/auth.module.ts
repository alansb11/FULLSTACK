import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtMiddleware } from './jwt.middleware';
import { RolesGuard } from './guards/roles.guard';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '8h' },
      }),
    }),
  ],
  providers: [AuthService, JwtMiddleware, RolesGuard],
  controllers: [AuthController],
  exports: [JwtModule, JwtMiddleware, RolesGuard],
})
export class AuthModule {}