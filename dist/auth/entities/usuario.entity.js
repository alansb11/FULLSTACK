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
exports.Usuario = exports.Rol = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
var Rol;
(function (Rol) {
    Rol["ADMIN"] = "admin";
    Rol["ESTUDIANTE"] = "estudiante";
})(Rol || (exports.Rol = Rol = {}));
let Usuario = class Usuario {
    idUsuario;
    username;
    password;
    rol;
    idEstudiante;
    estudiante;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idUsuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 20 }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'idEstudiante', nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "idEstudiante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'idEstudiante' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Usuario.prototype, "estudiante", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('Usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map