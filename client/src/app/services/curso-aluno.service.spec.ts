import { TestBed } from '@angular/core/testing';

import { CursoAlunoService } from './curso-aluno.service';

describe('CursoAlunoService', () => {
  let service: CursoAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
