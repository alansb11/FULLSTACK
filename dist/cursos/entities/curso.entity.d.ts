import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
export declare class Curso {
    idCurso: number;
    nombreCurso: string;
    idGrado: number;
    idCarrera: string;
    idCatedratico: number;
    nombreCatedratico: string;
    estudiantes: Estudiante[];
}
