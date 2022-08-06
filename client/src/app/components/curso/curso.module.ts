import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { CursoService } from 'src/app/services/curso.service';
import { NovoCursoComponent } from './novo-curso/novo-curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursoComponent,
    NovoCursoComponent,
    CursoDetalheComponent,
    CursoEditarComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    CursoService
  ]
})
export class CursoModule { }
