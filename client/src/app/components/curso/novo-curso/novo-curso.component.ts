import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { NotifyComponent } from 'src/app/shared/notify/notify.component';

@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.component.html',
  styleUrls: ['./novo-curso.component.css']
})
export class NovoCursoComponent implements OnInit {
  form;
  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService,
    private toast: NotifyComponent
  ) { 
    this.form = this.formBuilder.group({
      descricao: ['', Validators.required],
      ementa:['', Validators.required]
    })
  }

  criarCurso(){
    const novo = {
      descricao: this.form.get('descricao').value,
      ementa: this.form.get('ementa').value
    }
    this.cursoService.create(novo).subscribe((data: any)=>{
      if(data){
        this.toast.createEdit('Curso criado com sucesso!')
        this.form.reset()
        setTimeout(() => {
          this.cursoService.getCursos().subscribe()
        }, 500);
      }
    })
  }

  ngOnInit(): void {
  }

}
