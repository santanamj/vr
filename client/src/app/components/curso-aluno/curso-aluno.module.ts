import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoAlunoRoutingModule } from './curso-aluno-routing.module';
import { CursoAlunoComponent } from './curso-aluno.component';


@NgModule({
  declarations: [
    CursoAlunoComponent
  ],
  imports: [
    CommonModule,
    CursoAlunoRoutingModule
  ]
})
export class CursoAlunoModule { }
