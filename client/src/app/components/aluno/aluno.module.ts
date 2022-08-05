import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlunoComponent,
    AlunoDetailComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[
    AlunoService
  ]
})
export class AlunoModule { }
