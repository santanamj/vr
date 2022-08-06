import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CursoService } from 'src/app/services/curso.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyComponent } from 'src/app/shared/notify/notify.component';
@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit {
  curso; 
  idCurso; 
  form;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private toast: NotifyComponent
  ) {    
    this.idCurso = this.route.snapshot.paramMap.get('id');    
    this.cursoService.getCursoId(this.idCurso)
      .subscribe((data: any) => {
        this.curso = data;           
      });
    this.form = this.formBuilder.group({
      descricao: [''],
      ementa: ['']
    })  
  }
 
  editarCurso(){
    const edit = {
      descricao: this.form.get('descricao').value,
      ementa: this.form.get('ementa').value
    }
    this.cursoService.updateCurso(this.idCurso, edit).subscribe((data: any)=>{
      if(data){
        this.toast.createEdit('Curso editado com sucesso')
        setTimeout(() => {
          this.cursoService.getCursos().subscribe()
        }, 500);
      }
    })
  }

  ngOnInit(): void {
  }

}
