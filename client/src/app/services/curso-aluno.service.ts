import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from "rxjs/operators";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoAlunoService {
  domain = environment.domain;
  constructor(
    private http: HttpClient
  ) { }

  create(data){
    return this.http.post(this.domain + 'api/curso-aluno/create', data)
  }
}
