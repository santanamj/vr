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
    this.storeCurso.set('cursos', [])
    return this.http.get(this.domain + 'api/curso/getAll')
      .pipe(
        map((res: any) => {
          this.storeCurso.set('cursos', res)     
         })
      );
  }
  getCursoId(id){
    return this.http.get(this.domain + 'api/curso/' + id)
  }

  create(data){
    return this.http.post(this.domain + 'api/curso/create', data)
  }
  updateCurso(id, data){
    return this.http.patch(this.domain + 'api/curso/' + id, data)
  }
 
}
