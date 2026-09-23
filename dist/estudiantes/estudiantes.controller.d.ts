import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudiantesController {
    private readonly estudiantesService;
    constructor(estudiantesService: EstudiantesService);
    create(dto: CreateEstudianteDto): Promise<import("./entities/estudiante.entity").Estudiante>;
    findAll(req: any): Promise<import("./entities/estudiante.entity").Estudiante> | Promise<import("./entities/estudiante.entity").Estudiante[]>;
    findOne(id: number, req: any): Promise<import("./entities/estudiante.entity").Estudiante>;
    update(id: number, dto: UpdateEstudianteDto): Promise<import("./entities/estudiante.entity").Estudiante>;
    remove(id: number): Promise<import("./entities/estudiante.entity").Estudiante>;
}
