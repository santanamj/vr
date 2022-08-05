import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso.component';

const routes: Routes = [
  {
    path:'',
    component: CursoComponent
  },
  // {
  //   path:'curso/:id',
  //   component: CursoDetailComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
