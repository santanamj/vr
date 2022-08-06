import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { CursoService } from 'src/services/curso.service';

@Controller('curso')
export class CursoController {
    constructor(
        private cursoService: CursoService
    ) {

    }
    @Post('create')
    async create(@Body() curso: CursoDto) {
        return await this.cursoService.createCurso(curso);
    }

    @Get('getAll')
    async getAll() {        
        return await this.cursoService.getAll()
    }

    @Get(':id')
    async cursoId(@Param()id: string){
        return await this.cursoService.cursoId(id)
    }

    @Patch(':id')
    async updateCurso(@Param() id: string, @Body() updateCurso: UpdateCursoDto) {
        return await this.cursoService.updateCurso(id, updateCurso)
    }
}
