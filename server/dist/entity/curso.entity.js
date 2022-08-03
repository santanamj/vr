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
exports.CursoEntity = void 0;
const typeorm_1 = require("typeorm");
let CursoEntity = class CursoEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CursoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'int4' }),
    __metadata("design:type", Number)
], CursoEntity.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], CursoEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], CursoEntity.prototype, "ementa", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CursoEntity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CursoEntity.prototype, "updatedAt", void 0);
CursoEntity = __decorate([
    (0, typeorm_1.Entity)()
], CursoEntity);
exports.CursoEntity = CursoEntity;
//# sourceMappingURL=curso.entity.js.map