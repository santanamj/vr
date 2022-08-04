import {
    BaseEntity,
    Entity,   
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { CursoAlunoEntity } from './curso_aluno.entity';

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

    @ManyToOne(()=> CursoAlunoEntity, cursoAluno => cursoAluno.curso)
    cursoAluno: CursoAlunoEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}