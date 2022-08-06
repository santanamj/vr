import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';
import { AlunoNovoComponent } from './aluno-novo/aluno-novo.component';
import { AlunoComponent } from './aluno.component';

const routes: Routes = [
  {
    path:'',
    component: AlunoComponent
  },
  {
    path:'aluno/criar-aluno',
    component: AlunoNovoComponent
  },
  {
    path:'aluno/:id',
    component: AlunoDetailComponent
  },
  {
    path:'aluno/editar/:id',
    component: AlunoEditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
