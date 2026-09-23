import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Usuario, Rol } from './entities/usuario.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private usuarioRepo;
    private jwtService;
    constructor(usuarioRepo: Repository<Usuario>, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        idUsuario: number;
        username: string;
        rol: Rol;
        idEstudiante: number | null;
        estudiante: import("../estudiantes/entities/estudiante.entity").Estudiante;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            idUsuario: number;
            username: string;
            rol: Rol;
            idEstudiante: number | null;
        };
    }>;
}
