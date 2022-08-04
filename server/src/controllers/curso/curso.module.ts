import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { CursoService } from '../../services/curso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from 'src/entity/curso.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Curso])
  ],
  controllers: [CursoController],
  providers: [CursoService]
})
export class CursoModule {}
