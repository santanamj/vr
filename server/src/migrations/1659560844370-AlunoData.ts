import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class AlunoData1659560844370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: 'aluno',
        //         columns: [
        //             {
        //                 name: 'id',
        //                 type: 'uuid',
        //                 isPrimary: true,
        //                 isGenerated: true,
        //                 generationStrategy: 'uuid',
        //                 default: 'uuid_generate_v4()'
        //             },
        //             {
        //                 name: 'codigo',
        //                 type: 'int4'
        //             },
        //             {
        //                 name: 'nome',
        //                 type: 'varchar',
        //                 length: '50'
        //             },
        //             {
        //                 name: 'createAt',
        //                 type: 'timestamp',
        //                 default: 'CURRENT_TIMESTAMP'
        //             },
        //             {
        //                 name: 'updatedAt',
        //                 type: 'timestamp',
        //                 default: 'CURRENT_TIMESTAMP'
        //             }
        //         ]
        //     })
        // ),
        // await queryRunner.addColumn(
        //     "aluno",
        //     new TableColumn({
        //         name: "cursoaluno",
        //         type: "int",
        //     }),
        // )
        // await queryRunner.createForeignKey(
        //     'aluno',
        //     new TableForeignKey({
        //         columnNames: ["cursoaluno"],
        //         referencedColumnNames: ["id"],
        //         referencedTableName: "cursoaluno",
        //     })
        //   );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.dropTable('aluno')
    }

}
