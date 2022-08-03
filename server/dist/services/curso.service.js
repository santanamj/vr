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
exports.CursoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const curso_entity_1 = require("../entity/curso.entity");
const typeorm_2 = require("typeorm");
let CursoService = class CursoService {
    constructor(cursoRepository) {
        this.cursoRepository = cursoRepository;
    }
    async createCurso(cursoDto) {
        const { codigo, descricao, ementa } = cursoDto;
        const curso = new curso_entity_1.CursoEntity();
        curso.codigo = codigo;
        curso.descricao = descricao;
        curso.ementa = ementa;
        const create = await this.cursoRepository.save(curso);
        return create;
    }
    async updateCurso(id, updateCursoDto) {
        const { codigo, descricao, ementa } = updateCursoDto;
        const cursoFound = await this.cursoRepository.findOne(id);
        const curso = Object.assign(Object.assign({}, cursoFound), { codigo: codigo, descricao: descricao, ementa: ementa, update: new Date() });
        delete curso.id;
        const update = await this.cursoRepository.update(id, Object.assign({}, curso));
        return { curso, update };
    }
};
CursoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(curso_entity_1.CursoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CursoService);
exports.CursoService = CursoService;
//# sourceMappingURL=curso.service.js.map