import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { StoreAluno } from 'src/app/stores/aluno.store';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos$
  constructor(
    private alunoStore: StoreAluno,
    private alunoService: AlunoService
  ) {
    this.alunoService.getAlunos().subscribe()
    this.alunos$ = this.alunoStore.getaluno()
   }

  ngOnInit(): void {
  }

}
