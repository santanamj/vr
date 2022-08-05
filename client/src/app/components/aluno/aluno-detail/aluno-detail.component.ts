import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from 'src/app/services/aluno.service';
import { StoreCurso } from 'src/app/stores/curso.store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {
  aluno;
  cursos$;
  idAluno;
  selected;
  form;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private alunoService: AlunoService,
    private cursoStore: StoreCurso,
    private formBuilder: FormBuilder,
    private CsAl: CursoAlunoService
  ) {
    this.idAluno = this.route.snapshot.paramMap.get('id');
    this.alunoService.getAlunoId(this.idAluno)
      .subscribe((aluno: any) => {
        this.aluno = aluno;
      });
    this.cursos$ = this.cursoStore.getcurso();
    this.form = this.formBuilder.group({
      curso: []
    })
  }

  ngOnInit(): void {
  }
  addCurso() {
    const curso_aluno = {
      aluno: this.idAluno,
      curso: this.form.get('curso').value
    }
    this.CsAl.create(curso_aluno).subscribe((data: any)=>{
      console.log(data)
    })  
  }
}
