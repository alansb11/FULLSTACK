import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CursosModule } from './cursos/cursos.module';
import { JwtMiddleware } from './auth/jwt.middleware';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { CursosController } from './cursos/cursos.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT') ?? '1433', 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
        options: {
          encrypt: false,
          trustServerCertificate: true,
        },
      }),
    }),
    AuthModule,
    EstudiantesModule,
    CursosModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes(EstudiantesController, CursosController);
  }
}