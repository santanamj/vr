import { forwardRef, Module } from '@nestjs/common';
import { CursoalunoController } from './curso_aluno.controller';
import { CursoalunoService } from '../../services/curso_aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursoaluno } from 'src/entity/curso_aluno.entity';
import { CursoModule } from '../curso/curso.module';
import { AlunoModule } from '../aluno/aluno.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Cursoaluno]),
    forwardRef(()=> CursoModule),
    forwardRef(()=> AlunoModule)
  ],
  controllers: [CursoalunoController],
  providers: [CursoalunoService]
})
export class CursoalunoModule {}
