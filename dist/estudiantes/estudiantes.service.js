"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudiante_entity_1 = require("./entities/estudiante.entity");
const curso_entity_1 = require("../cursos/entities/curso.entity");
let EstudiantesService = class EstudiantesService {
    estudianteRepo;
    cursoRepo;
    constructor(estudianteRepo, cursoRepo) {
        this.estudianteRepo = estudianteRepo;
        this.cursoRepo = cursoRepo;
    }
    async create(dto) {
        const estudiante = this.estudianteRepo.create({
            nombre: dto.nombre,
            apellido: dto.apellido,
            nivel: dto.nivel,
            seccion: dto.seccion,
        });
        if (dto.cursoIds?.length) {
            estudiante.cursos = await this.cursoRepo.findBy({
                idCurso: (0, typeorm_2.In)(dto.cursoIds),
            });
        }
        return this.estudianteRepo.save(estudiante);
    }
    findAll() {
        return this.estudianteRepo.find({ relations: { cursos: true } });
    }
    async findOne(id) {
        const estudiante = await this.estudianteRepo.findOne({
            where: { idEstudiante: id },
            relations: { cursos: true },
        });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con id ${id} no encontrado`);
        }
        return estudiante;
    }
    async update(id, dto) {
        const estudiante = await this.findOne(id);
        Object.assign(estudiante, {
            nombre: dto.nombre ?? estudiante.nombre,
            apellido: dto.apellido ?? estudiante.apellido,
            nivel: dto.nivel ?? estudiante.nivel,
            seccion: dto.seccion ?? estudiante.seccion,
        });
        if (dto.cursoIds) {
            estudiante.cursos = await this.cursoRepo.findBy({
                idCurso: (0, typeorm_2.In)(dto.cursoIds),
            });
        }
        return this.estudianteRepo.save(estudiante);
    }
    async remove(id) {
        const estudiante = await this.findOne(id);
        return this.estudianteRepo.remove(estudiante);
    }
};
exports.EstudiantesService = EstudiantesService;
exports.EstudiantesService = EstudiantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudiante_entity_1.Estudiante)),
    __param(1, (0, typeorm_1.InjectRepository)(curso_entity_1.Curso)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EstudiantesService);
//# sourceMappingURL=estudiantes.service.js.map