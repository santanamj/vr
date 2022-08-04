import { cursorTo } from 'readline';
import {
    BaseEntity,
    Entity,   
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { AlunoEntity } from './aluno.entity';
import { CursoEntity } from './curso.entity';

@Entity()

export class CursoAlunoEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, type:'int4' })
    codigo: number;
   
    @OneToMany(()=> CursoEntity, curso => curso.cursoAluno, {cascade: true})
    curso: CursoEntity;

    @OneToMany(()=> AlunoEntity, aluno => aluno.cursoAluno, {cascade: true})
    aluno: AlunoEntity;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}