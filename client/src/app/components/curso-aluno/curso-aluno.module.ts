import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoAlunoRoutingModule } from './curso-aluno-routing.module';
import { CursoAlunoComponent } from './curso-aluno.component';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';


@NgModule({
  declarations: [
    CursoAlunoComponent
  ],
  imports: [
    CommonModule,
    CursoAlunoRoutingModule
  ],
  providers:[CursoAlunoService],
  exports:[]
})
export class CursoAlunoModule { }
