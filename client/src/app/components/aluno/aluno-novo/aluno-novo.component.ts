import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { NotifyComponent } from 'src/app/shared/notify/notify.component';
@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {
  form;
  constructor(
    private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private toast: NotifyComponent
  ) { 
    this.form = this.formBuilder.group({
      nome: ['', Validators.required]
    })
  }

  criarAluno(){
    const novo = {
      nome: this.form.get('nome').value
    }
    this.alunoService.create(novo).subscribe((data: any)=>{
      if(data){
        this.toast.createSuccess('Aluno criado com sucesso!');
        this.form.reset();
        setTimeout(() => {
          this.alunoService.getAlunos().subscribe()
        }, 500);
      }
    })
  }


  ngOnInit(): void {
  }

}
