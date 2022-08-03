import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { CursoEntity } from 'src/entity/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
    constructor(
        @InjectRepository(CursoEntity)
        private cursoRepository: Repository<CursoEntity>
    ) { }
    async createCurso(cursoDto: CursoDto) {
        const { codigo, descricao, ementa } = cursoDto;
        const curso = new CursoEntity();
        curso.codigo = codigo;
        curso.descricao = descricao;
        curso.ementa = ementa;
        const create = await this.cursoRepository.save(curso)
        return create
    }

    async updateCurso(id, updateCursoDto: UpdateCursoDto) {
        const { codigo, descricao, ementa} = updateCursoDto;
        const cursoFound = await this.cursoRepository.findOne(id)
        const curso = {
            ...cursoFound,
            codigo: codigo,
            descricao: descricao,
            ementa: ementa,
            update: new Date()
        }
        delete curso.id        
        const update = await this.cursoRepository.update(id, {...curso});
        return {curso, update}
    }
}
