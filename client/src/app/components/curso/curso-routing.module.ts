import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { CursoComponent } from './curso.component';
import { NovoCursoComponent } from './novo-curso/novo-curso.component';

const routes: Routes = [
  {
    path:'',
    component: CursoComponent
  },
  {
    path:'curso/novo',
    component: NovoCursoComponent
  },
  {
    path:'curso/:id',
    component: CursoDetalheComponent
  },
  {
    path:'curso/update/:id',
    component: CursoEditarComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
