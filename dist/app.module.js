"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const estudiantes_module_1 = require("./estudiantes/estudiantes.module");
const cursos_module_1 = require("./cursos/cursos.module");
const jwt_middleware_1 = require("./auth/jwt.middleware");
const estudiantes_controller_1 = require("./estudiantes/estudiantes.controller");
const cursos_controller_1 = require("./cursos/cursos.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(jwt_middleware_1.JwtMiddleware)
            .forRoutes(estudiantes_controller_1.EstudiantesController, cursos_controller_1.CursosController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mssql',
                    host: configService.get('DB_HOST'),
                    port: parseInt(configService.get('DB_PORT') ?? '1433', 10),
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
            auth_module_1.AuthModule,
            estudiantes_module_1.EstudiantesModule,
            cursos_module_1.CursosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map