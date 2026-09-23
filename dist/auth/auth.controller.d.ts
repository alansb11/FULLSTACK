import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        idUsuario: number;
        username: string;
        rol: import("./entities/usuario.entity").Rol;
        idEstudiante: number | null;
        estudiante: import("../estudiantes/entities/estudiante.entity").Estudiante;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            idUsuario: number;
            username: string;
            rol: import("./entities/usuario.entity").Rol;
            idEstudiante: number | null;
        };
    }>;
}
