import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alunoDto } from 'src/dtos/create-aluno.dto';
import { UpdatealunoDto } from 'src/dtos/update-aluno.dto';
import { Aluno } from 'src/entity/aluno.entity';
import { Curso } from 'src/entity/curso.entity';
import { Cursoaluno } from 'src/entity/curso_aluno.entity';
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
        const atualCodigo = await Aluno.createQueryBuilder('aluno')
        .orderBy('aluno.codigo', 'DESC')
        .getOne();
        console.log('atualCodigo', atualCodigo)
        if(atualCodigo){
            aluno.codigo = Number(atualCodigo.codigo) + 1;
        }else{
            aluno.codigo = 1;
        }
        aluno.nome = nome;
        const createAluno = await this.alunoRepo.save(aluno)
        return createAluno
    }

    async getAll(){
        const alunos = await this.alunoRepo.find();
        return alunos
    }

    async alunoId(id){
        const aluno = await this.alunoRepo.findOne(id);   
        if(aluno){
            const cursos = await this.getCursoAluno(id)
            return {aluno, cursos}
        }else{
            return aluno
}    
    }
    async getCursoAluno(dado){
        const {id} = dado
        const cursos =  Cursoaluno.createQueryBuilder('curso_aluno')
        .leftJoinAndSelect('curso_aluno.aluno', 'aluno')
        .where('aluno.id = :id', {'id': id})
        .leftJoinAndSelect('curso_aluno.curso', 'curso')        
        const data = await cursos.getMany();        
        return data
    }

    async updateAluno(id, updateCursoDto: UpdatealunoDto) {
        const { nome} = updateCursoDto;        
        const alunoFound = await this.alunoRepo.findOne(id)
        const aluno = {
            ...alunoFound,
            nome: nome          
        }
        delete aluno.id        
        const update = await this.alunoRepo.update(id, {...aluno});
        return {aluno, update}
    }
}
