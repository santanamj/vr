import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoalunoDto } from 'src/dtos/create-curso_aluno.dto';
import { Aluno } from 'src/entity/aluno.entity';
import { Curso } from 'src/entity/curso.entity';
import { Cursoaluno } from 'src/entity/curso_aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoalunoService {
    constructor(
        @InjectRepository(Cursoaluno)
        private curso_alunoRepo: Repository<Cursoaluno>
    ) {}

    async createCursoaluno(clDto: CursoalunoDto){
        const {codigo, cursoId, alunoId} = clDto;
        const curso = await Curso.findOne(cursoId)
        const aluno = await Aluno.findOne(alunoId);
        const curso_aluno = new Cursoaluno();
        curso_aluno.codigo = codigo;
        curso_aluno.curso = curso;
        curso_aluno.aluno = aluno;

        const create = await this.curso_alunoRepo.save(curso_aluno)
        return create
    }
}
