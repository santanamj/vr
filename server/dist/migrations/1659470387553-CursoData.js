"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoData1659470387553 = void 0;
const typeorm_1 = require("typeorm");
class CursoData1659470387553 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'curso',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    default: 'uui_generate_v4()'
                },
                {
                    name: 'codigo',
                    type: 'int4'
                },
                {
                    name: 'descricao',
                    type: 'varchar'
                },
                {
                    name: 'ementa',
                    type: 'text'
                },
                {
                    name: 'createAt',
                    type: 'timestamp',
                    default: new Date()
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: new Date()
                }
            ]
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('curso');
    }
}
exports.CursoData1659470387553 = CursoData1659470387553;
//# sourceMappingURL=1659470387553-CursoData.js.map