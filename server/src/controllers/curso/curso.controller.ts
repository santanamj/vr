import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { CursoService } from 'src/services/curso.service';
import { runInThisContext } from 'vm';

@Controller('curso')
export class CursoController {
    constructor(
        private cursoService: CursoService
    ) {
        
    }
    @Post('create')
    async create(@Body()curso: CursoDto){
        return await this.cursoService.createCurso(curso);
    }
    @Patch(':id')
   async  updateCurso(@Param()id: string, @Body()updateCurso: UpdateCursoDto){
    return await this.cursoService.updateCurso(id, updateCurso)
   }
}
