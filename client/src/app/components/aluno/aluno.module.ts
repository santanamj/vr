import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';
import { AlunoNovoComponent } from './aluno-novo/aluno-novo.component';


@NgModule({
  declarations: [
    AlunoComponent,
    AlunoDetailComponent,
    AlunoEditarComponent,
    AlunoNovoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    AlunoService
  ]
})
export class AlunoModule { }
