import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from "rxjs/operators";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { environment } from 'src/environments/environment';
import { StoreAluno } from '../stores/aluno.store';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  domain = environment.domain;
  constructor(
    private http: HttpClient,
    private storeAluno: StoreAluno
  ) {}

  getAlunos() {    
    return this.http.get(this.domain + 'api/aluno/getAll')
      .pipe(
        map((res: any) => {
          this.storeAluno.set('alunos', res)     
         })
      );
  }
  getAlunoId(id){
    return this.http.get(this.domain + 'api/aluno/' + id)
  }
  create(data){
    return this.http.post(this.domain + 'api/aluno/create', data)
  }
  updateAluno(id, data){
    return this.http.patch(this.domain + 'api/aluno/' + id, data)
  }
}
