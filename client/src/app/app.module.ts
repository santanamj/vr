import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CursoModule } from './components/curso/curso.module';
import { CursoAlunoModule } from './components/curso-aluno/curso-aluno.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    CursoModule,
    CursoAlunoModule,
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
