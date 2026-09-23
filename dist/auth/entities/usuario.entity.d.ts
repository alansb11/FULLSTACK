import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
export declare enum Rol {
    ADMIN = "admin",
    ESTUDIANTE = "estudiante"
}
export declare class Usuario {
    idUsuario: number;
    username: string;
    password: string;
    rol: Rol;
    idEstudiante: number | null;
    estudiante: Estudiante;
}
