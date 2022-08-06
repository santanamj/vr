import { Component, OnInit } from '@angular/core';
import { StoreCurso } from 'src/app/stores/curso.store';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos$;
  constructor(   
    private cursosStore: StoreCurso
  ) {
    this.cursos$ = this.cursosStore.getcurso()
  }

  ngOnInit(): void {
  }

}
