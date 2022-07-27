import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CursoModule } from './controllers/curso/curso.module';
import { CursoAlunoModule } from './controllers/curso_aluno/curso_aluno.module';
import { AlunoModule } from './controllers/aluno/aluno.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    CursoModule,
    CursoAlunoModule,
    AlunoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
