import { Curso } from './curso.model';

export interface Estudiante {
  idEstudiante: number;
  nombre: string;
  apellido: string;
  nivel: string;
  seccion: string;
  cursos?: Curso[];
}