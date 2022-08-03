import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CursoData1659470387553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: 'curso',
            columns:[
                {
                    name: 'id',
                    type:'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                    default:'uui_generate_v4()'
                },
                {
                    name:'codigo',
                    type: 'int4'
                },
                {
                    name:'descricao',
                    type: 'varchar'
                },
                {
                    name:'ementa',
                    type: 'text'
                },
                {
                    name:'createAt',
                    type:'timestamp',
                    default: new Date()
                },
                {
                    name:'updatedAt',
                    type:'timestamp',
                    default: new Date()
                }

            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('curso')
    }

}
