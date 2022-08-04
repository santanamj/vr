import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CursoalunoData1659571799745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: 'cursoaluno',
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
        // )
        // await queryRunner.addColumn(
        //     "cursoaluno",
        //     new TableColumn({
        //         name: "aluno",
        //         type: "int",
        //     }),
        // )
        // await queryRunner.createForeignKey(
        //     'cursoaluno',
        //     // new TableForeignKey({
        //     //     columnNames: ["curso"],
        //     //     referencedColumnNames: ["id"],
        //     //     referencedTableName: "curso",
        //     // }),
        //     new TableForeignKey({
        //       columnNames: ["aluno"],
        //       referencedColumnNames: ["id"],
        //       referencedTableName: "aluno",
        //   }
            
        //     )
        //   );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.dropTable('cursoaluno')
    }

}
