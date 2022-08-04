import { cursorTo } from 'readline';
import {
    BaseEntity,
    Entity,   
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
} from 'typeorm';
import { Aluno } from './aluno.entity';
import { Curso } from './curso.entity';

@Entity()

export class Cursoaluno extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, type:'int4' })
    codigo: number;
   
    @ManyToOne(()=> Curso, curso => curso.cursoaluno, {cascade: true})
    curso: Curso;

    @ManyToOne(()=> Aluno, aluno => aluno.cursoaluno, {cascade: true})
    aluno: Aluno;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}