import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAlunoComponent } from './curso-aluno.component';

describe('CursoAlunoComponent', () => {
  let component: CursoAlunoComponent;
  let fixture: ComponentFixture<CursoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
