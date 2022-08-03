import {
    BaseEntity,
    Entity,   
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()

export class CursoEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, type:'int4' })
    codigo: number;

    @Column({ nullable: true, type:'varchar', length:50 })
    descricao: string;

    @Column({ nullable: true, type:'text' })
    ementa: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}