import {
    BaseEntity,
    Entity,   
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Cursoaluno } from './curso_aluno.entity';

@Entity()

export class Curso extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, type:'int4' })
    codigo: number;

    @Column({ nullable: true, type:'varchar', length:50 })
    descricao: string;

    @Column({ nullable: true, type:'text' })
    ementa: string;

    @OneToMany(()=> Cursoaluno, cursoaluno => cursoaluno.curso)
    cursoaluno: Cursoaluno[];

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}