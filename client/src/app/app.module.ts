import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CursoModule } from './components/curso/curso.module';
import { CursoAlunoModule } from './components/curso-aluno/curso-aluno.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { RouterModule } from '@angular/router';
import { StoreAluno } from './stores/aluno.store';
import { AlunoService } from './services/aluno.service';
import { StoreCurso } from './stores/curso.store';
import { NotifyComponent } from './shared/notify/notify.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    CursoModule,
    CursoAlunoModule,
    AlunoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  exports:[FormsModule,
    ReactiveFormsModule,],
  providers: [ StoreAluno, StoreCurso, NotifyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
