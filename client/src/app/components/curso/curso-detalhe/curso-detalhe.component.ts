import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  idCurso;
  curso;
  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
  ) { 
    this.idCurso = this.route.snapshot.paramMap.get('id');    
    this.cursoService.getCursoId(this.idCurso)
      .subscribe((data: any) => {
        this.curso = data;        
      });
  }

  ngOnInit(): void {
  }

}
