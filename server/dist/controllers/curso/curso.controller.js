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
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const create_curso_dto_1 = require("../../dtos/create-curso.dto");
const update_curso_dto_1 = require("../../dtos/update-curso.dto");
const curso_service_1 = require("../../services/curso.service");
let CursoController = class CursoController {
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    async create(curso) {
        return await this.cursoService.createCurso(curso);
    }
    async updateCurso(id, updateCurso) {
        return await this.cursoService.updateCurso(id, updateCurso);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curso_dto_1.CursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_curso_dto_1.UpdateCursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "updateCurso", null);
CursoController = __decorate([
    (0, common_1.Controller)('curso'),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoController);
exports.CursoController = CursoController;
//# sourceMappingURL=curso.controller.js.map