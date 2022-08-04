import { Test, TestingModule } from '@nestjs/testing';
import { CursoalunoService } from './curso_aluno.service';

describe('CursoalunoService', () => {
  let service: CursoalunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursoalunoService],
    }).compile();

    service = module.get<CursoalunoService>(CursoalunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
