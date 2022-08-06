import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlunoService } from 'src/app/services/aluno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyComponent } from 'src/app/shared/notify/notify.component';

@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent implements OnInit {
  aluno; 
  idAluno; 
  form;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private alunoService: AlunoService,
    private formBuilder: FormBuilder,
    private toast: NotifyComponent
  ) { 
    this.getAluno()
    this.idAluno = this.route.snapshot.paramMap.get('id');    
    this.alunoService.getAlunoId(this.idAluno)
      .subscribe((data: any) => {
        this.aluno = data.aluno;         
      });
    this.form = this.formBuilder.group({
      nome: ['']
    })  
  }
  getAluno(){
    
  }
  editarAluno(){
    const edit = {
      nome: this.form.get('nome').value
    }
    this.alunoService.updateAluno(this.idAluno, edit).subscribe((data: any)=>{
      if(data){
        this.toast.createEdit('Aluno editado com sucesso!')
        setTimeout(() => {
          this.alunoService.getAlunos().subscribe()
        }, 500);
      }
    })
  }
  ngOnInit(): void {
  }

}
