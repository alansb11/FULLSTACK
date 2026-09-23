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
exports.EstudiantesController = void 0;
const common_1 = require("@nestjs/common");
const estudiantes_service_1 = require("./estudiantes.service");
const create_estudiante_dto_1 = require("./dto/create-estudiante.dto");
const update_estudiante_dto_1 = require("./dto/update-estudiante.dto");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const usuario_entity_1 = require("../auth/entities/usuario.entity");
let EstudiantesController = class EstudiantesController {
    estudiantesService;
    constructor(estudiantesService) {
        this.estudiantesService = estudiantesService;
    }
    create(dto) {
        return this.estudiantesService.create(dto);
    }
    findAll(req) {
        if (req.user.rol === usuario_entity_1.Rol.ESTUDIANTE) {
            return this.estudiantesService.findOne(req.user.idEstudiante);
        }
        return this.estudiantesService.findAll();
    }
    findOne(id, req) {
        if (req.user.rol === usuario_entity_1.Rol.ESTUDIANTE && req.user.idEstudiante !== id) {
            throw new common_1.ForbiddenException('No puedes ver información de otro estudiante');
        }
        return this.estudiantesService.findOne(id);
    }
    update(id, dto) {
        return this.estudiantesService.update(id, dto);
    }
    remove(id) {
        return this.estudiantesService.remove(id);
    }
};
exports.EstudiantesController = EstudiantesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(usuario_entity_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudiante_dto_1.CreateEstudianteDto]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(usuario_entity_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estudiante_dto_1.UpdateEstudianteDto]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(usuario_entity_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstudiantesController.prototype, "remove", null);
exports.EstudiantesController = EstudiantesController = __decorate([
    (0, common_1.Controller)('estudiantes'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [estudiantes_service_1.EstudiantesService])
], EstudiantesController);
//# sourceMappingURL=estudiantes.controller.js.map