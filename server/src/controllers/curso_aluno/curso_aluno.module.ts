import { Module } from '@nestjs/common';
import { CursoAlunoController } from './curso_aluno.controller';
import { CursoAlunoService } from '../../services/curso_aluno.service';

@Module({
  controllers: [CursoAlunoController],
  providers: [CursoAlunoService]
})
export class CursoAlunoModule {}
