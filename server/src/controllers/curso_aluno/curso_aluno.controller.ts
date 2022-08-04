import { Body, Controller, Post } from '@nestjs/common';
import { CursoalunoDto } from 'src/dtos/create-curso_aluno.dto';
import { CursoalunoService } from 'src/services/curso_aluno.service';

@Controller('curso-aluno')
export class CursoalunoController {
    constructor(
        private cursoAlunoService: CursoalunoService
    ) {}

    @Post('create')
    async create(@Body() cursoaluno: CursoalunoDto){
        return await this.cursoAlunoService.createCursoaluno(cursoaluno)
    }
}
