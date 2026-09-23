import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { Estudiante } from '../estudiantes/entities/estudiante.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursosService {
    private cursoRepo;
    private estudianteRepo;
    constructor(cursoRepo: Repository<Curso>, estudianteRepo: Repository<Estudiante>);
    create(dto: CreateCursoDto): Promise<Curso>;
    findAll(): Promise<Curso[]>;
    findOne(id: number): Promise<Curso>;
    update(id: number, dto: UpdateCursoDto): Promise<Curso>;
    remove(id: number): Promise<Curso>;
}
