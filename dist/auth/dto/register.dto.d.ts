import { Rol } from '../entities/usuario.entity';
export declare class RegisterDto {
    username: string;
    password: string;
    rol: Rol;
    idEstudiante?: number;
}
