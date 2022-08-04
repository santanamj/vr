import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alunoDto } from 'src/dtos/create-aluno.dto';
import { Aluno } from 'src/entity/aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {
    constructor(
        @InjectRepository(Aluno)
        private alunoRepo: Repository<Aluno>
    ) {}
    async create(alunoDto: alunoDto){
        const {codigo, nome} = alunoDto;

        const aluno = new Aluno()
        aluno.codigo = codigo;
        aluno.nome = nome;
        const createAluno = await this.alunoRepo.save(aluno)
        return createAluno
    }

    async getAll(){
        return await this.alunoRepo.find()
    }
}
