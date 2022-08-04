import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from 'src/entity/aluno.entity';
import { AlunoService } from 'src/services/aluno.service';
import { AlunoController } from './aluno.controller';


@Module({
  imports:[
    TypeOrmModule.forFeature([Aluno])
  ],
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule {}
