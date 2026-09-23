import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Curso } from '../cursos/entities/curso.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudiantesService {
    private estudianteRepo;
    private cursoRepo;
    constructor(estudianteRepo: Repository<Estudiante>, cursoRepo: Repository<Curso>);
    create(dto: CreateEstudianteDto): Promise<Estudiante>;
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
    update(id: number, dto: UpdateEstudianteDto): Promise<Estudiante>;
    remove(id: number): Promise<Estudiante>;
}
