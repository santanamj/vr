import { Body, Controller, Get, Post } from '@nestjs/common';
import { alunoDto } from 'src/dtos/create-aluno.dto';
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
}
