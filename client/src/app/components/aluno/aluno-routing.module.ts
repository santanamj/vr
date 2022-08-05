import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunoComponent } from './aluno.component';

const routes: Routes = [
  {
    path:'',
    component: AlunoComponent
  },
  {
    path:'aluno/:id',
    component: AlunoDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
