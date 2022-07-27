import { Module } from '@nestjs/common';
import { AlunoService } from 'src/services/aluno.service';
import { AlunoController } from './aluno.controller';


@Module({
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule {}
