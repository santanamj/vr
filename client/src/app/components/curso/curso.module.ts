import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { CursoService } from 'src/app/services/curso.service';


@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  providers:[
    CursoService
  ]
})
export class CursoModule { }
