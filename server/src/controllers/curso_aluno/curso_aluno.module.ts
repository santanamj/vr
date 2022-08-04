import { forwardRef, Module } from '@nestjs/common';
import { CursoAlunoController } from './curso_aluno.controller';
import { CursoAlunoService } from '../../services/curso_aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoAlunoEntity } from 'src/entity/curso_aluno.entity';
import { CursoModule } from '../curso/curso.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([CursoAlunoEntity]),
    forwardRef(()=> CursoModule),
    forwardRef(()=> CursoAlunoModule)
  ],
  controllers: [CursoAlunoController],
  providers: [CursoAlunoService]
})
export class CursoAlunoModule {}
