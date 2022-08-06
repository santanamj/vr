import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { alunoDto } from 'src/dtos/create-aluno.dto';
import { UpdatealunoDto } from 'src/dtos/update-aluno.dto';
import { AlunoService } from 'src/services/aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(
        private alunoService: AlunoService
    ) { }

    @Post('create')
    async create(@Body() aluno: alunoDto){
        return await this.alunoService.create(aluno)
    }
    @Get('getAll')
    async getAll(){        
        return await this.alunoService.getAll()
    }
    @Get(':id')
    async alunoId(@Param()id: string ){
     return await this.alunoService.alunoId(id)
    }

    @Patch(':id')
    async updateCurso(@Param() id: string, @Body() updateCurso: UpdatealunoDto) {
        return await this.alunoService.updateAluno(id, updateCurso)
    }
}
