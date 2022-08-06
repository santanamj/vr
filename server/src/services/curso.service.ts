import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { Curso } from 'src/entity/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
    constructor(
        @InjectRepository(Curso)
        private cursoRepository: Repository<Curso>
    ) { }
    async createCurso(cursoDto: CursoDto) {
        const { codigo, descricao, ementa } = cursoDto;       
        const curso = new Curso();
        const atualCodigo = await Curso.createQueryBuilder('curso')
        .orderBy('curso.codigo', 'DESC')
        .getOne();
        if(atualCodigo){
            curso.codigo = Number(atualCodigo.codigo) + 1;
        }else{
            curso.codigo = 1;
        }        
        curso.descricao = descricao;
        curso.ementa = ementa;
        const create = await this.cursoRepository.save(curso)
        return create
    }

    async getAll(){
        const cursos = await this.cursoRepository.find();           
        return cursos
    }

    async cursoId(data){
        const {id} = data;
        const curso = await this.cursoRepository.findOne(id);       
        return curso
    }

    async updateCurso(id, updateCursoDto: UpdateCursoDto) {
        const { descricao, ementa} = updateCursoDto;
        const cursoFound = await this.cursoRepository.findOne(id)
        const curso = {
            ...cursoFound,           
            descricao: descricao,
            ementa: ementa,
            updatedAt: new Date()
        }
        delete curso.id        
        const update = await this.cursoRepository.update(id, {...curso});
        return {curso, update}
    }
}
