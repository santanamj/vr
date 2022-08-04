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

export class Aluno extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true, type:'int4' })
    codigo: number;
   
    @Column({ nullable: true, type:'varchar', length:50 })
    nome: string;

    @OneToMany(()=> Cursoaluno, cursoaluno => cursoaluno.aluno)
    cursoaluno: Cursoaluno[];

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}