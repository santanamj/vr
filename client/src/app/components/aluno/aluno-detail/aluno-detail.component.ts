import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from 'src/app/services/aluno.service';
import { StoreCurso } from 'src/app/stores/curso.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
import { NotifyComponent } from 'src/app/shared/notify/notify.component';
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
  cursos;
  add = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private alunoService: AlunoService,
    private cursoStore: StoreCurso,
    private formBuilder: FormBuilder,
    private CsAl: CursoAlunoService,
    private toast: NotifyComponent
  ) {   
    this.getAluno()
    this.cursos$ = this.cursoStore.getcurso();
    this.form = this.formBuilder.group({
      curso: ['', Validators.required]
    })   
  }
  getAluno(){
    this.idAluno = this.route.snapshot.paramMap.get('id');    
    this.alunoService.getAlunoId(this.idAluno)
      .subscribe((data: any) => {
        this.aluno = data.aluno;
        if(data && data.cursos){
          this.cursos = data.cursos;         
        }
      });
  }
  ngOnInit(): void {
  }
  addCurso() {
    const curso_aluno = {
      alunoId: this.idAluno,
      cursoId: this.form.get('curso').value
    }    
    this.CsAl.create(curso_aluno).subscribe((data: any)=>{
      if(data){
        this.toast.createSuccess('Curso adicionado ao aluno com sucesso')
       setTimeout(()=>{
        this.getAluno();
        this.add = false;
       }, 500)
      }
    })  
  }
  novoCurso(){
    this.add = true;
  }
}
