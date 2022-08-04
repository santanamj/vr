import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module')
        .then(mod => mod.AlunoModule)
},
{
  path: 'curso',
  loadChildren: () => import('./curso/curso.module')
      .then(mod => mod.CursoModule)
},
{
  path: 'curso-aluno',
  loadChildren: () => import('./curso-aluno/curso-aluno.module')
      .then(mod => mod.CursoAlunoModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
