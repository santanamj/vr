import { Component } from '@angular/core';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start';

  constructor(
    private cursoService: CursoService
  ) {
    this.cursoService.getCursos().subscribe()
  }
}
