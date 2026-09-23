import { Estudiante } from './estudiante.model';

export interface Curso {
  idCurso: number;
  nombreCurso: string;
  idGrado: number;
  idCarrera: string;
  idCatedratico: number;
  nombreCatedratico: string;
  estudiantes?: Estudiante[];
}