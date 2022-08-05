import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, tap, catchError, delay, retry } from "rxjs/operators";
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { environment } from 'src/environments/environment';
import { StoreCurso } from '../stores/curso.store';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  domain = environment.domain;
  constructor(
    private http: HttpClient,
    private storeCurso: StoreCurso
  ) { }

  getCursos() {      
    return this.http.get(this.domain + 'api/curso/getAll')
      .pipe(
        map((res: any) => {
          console.log(res)
          this.storeCurso.set('cursos', res)     
         })
      );
  }
 
}
