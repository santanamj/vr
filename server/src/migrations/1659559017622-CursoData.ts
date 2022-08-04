import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CursoData1659559017622 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: 'curso',
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
        //                 name: 'descricao',
        //                 type: 'varchar'
        //             },
        //             {
        //                 name: 'ementa',
        //                 type: 'text'
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
        // // ),
        // // await queryRunner.createForeignKey(
        // //     'curso',
        // //     new TableForeignKey({
        // //         columnNames: ["cursoalunoId"],
        // //         referencedColumnNames: ["id"],
        // //         referencedTableName: "cursoaluno",
        // //     })
        //  );
         
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.dropTable('curso')
    }


}
