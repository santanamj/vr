import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoAlunoDto } from 'src/dtos/create-curso_aluno.dto';
import { AlunoEntity } from 'src/entity/aluno.entity';
import { CursoEntity } from 'src/entity/curso.entity';
import { CursoAlunoEntity } from 'src/entity/curso_aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoAlunoService {
    constructor(
        @InjectRepository(CursoAlunoEntity)
        private curso_alunoRepo: Repository<CursoAlunoEntity>
    ) {}

    async createCursoAluno(clDto: CursoAlunoDto){
        const {codigo, cursoId, alunoId} = clDto;
        const curso = await CursoEntity.findOne(cursoId)
        const aluno = await AlunoEntity.findOne(alunoId);

        const curso_aluno = new CursoAlunoEntity();

        curso_aluno.codigo = codigo;
        curso_aluno.curso = curso;
        curso_aluno.aluno = aluno;

        const create = await this.curso_alunoRepo.save(curso_aluno)
        return create
    }
}
