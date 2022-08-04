import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CursoAlunoData1659571799745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'curso_aluno',
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
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            'curso',
            new TableForeignKey({
              columnNames: ['cursoId'],
              referencedTableName: 'cursos',
              referencedColumnNames: ['id']
            })
          );
          await queryRunner.createForeignKey(
            'aluno',
            new TableForeignKey({
              columnNames: ['alunoId'],
              referencedTableName: 'cursos',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
