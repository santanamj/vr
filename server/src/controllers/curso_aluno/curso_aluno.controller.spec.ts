import { Test, TestingModule } from '@nestjs/testing';
import { CursoalunoController } from './curso_aluno.controller';

describe('CursoalunoController', () => {
  let controller: CursoalunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursoalunoController],
    }).compile();

    controller = module.get<CursoalunoController>(CursoalunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
