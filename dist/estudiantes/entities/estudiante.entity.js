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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("../../cursos/entities/curso.entity");
let Estudiante = class Estudiante {
    idEstudiante;
    nombre;
    apellido;
    nivel;
    seccion;
    cursos;
};
exports.Estudiante = Estudiante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idEstudiante' }),
    __metadata("design:type", Number)
], Estudiante.prototype, "idEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Estudiante.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Estudiante.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Estudiante.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Estudiante.prototype, "seccion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => curso_entity_1.Curso, (curso) => curso.estudiantes),
    (0, typeorm_1.JoinTable)({
        name: 'Curso_Estudiante',
        joinColumn: { name: 'idEstudiante', referencedColumnName: 'idEstudiante' },
        inverseJoinColumn: { name: 'idCurso', referencedColumnName: 'idCurso' },
    }),
    __metadata("design:type", Array)
], Estudiante.prototype, "cursos", void 0);
exports.Estudiante = Estudiante = __decorate([
    (0, typeorm_1.Entity)('Estudiante')
], Estudiante);
//# sourceMappingURL=estudiante.entity.js.map