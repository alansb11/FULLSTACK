import { Curso } from '../../cursos/entities/curso.entity';
export declare class Estudiante {
    idEstudiante: number;
    nombre: string;
    apellido: string;
    nivel: string;
    seccion: string;
    cursos: Curso[];
}
