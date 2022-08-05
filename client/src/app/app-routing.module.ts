import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'aluno',
    loadChildren: () => import('./components/aluno/aluno.module')
      .then(mod => mod.AlunoModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./components/curso/curso.module')
      .then(mod => mod.CursoModule)
  },
  {
    path: 'curso-aluno',
    loadChildren: () => import('./components/curso-aluno/curso-aluno.module')
      .then(mod => mod.CursoAlunoModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
