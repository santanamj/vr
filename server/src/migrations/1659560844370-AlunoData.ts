import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AlunoData1659560844370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'aluno',
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
                        name: 'nome',
                        type: 'varchar',
                        length: '50'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('aluno')
    }

}
