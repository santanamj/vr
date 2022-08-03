import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { CursoEntity } from 'src/entity/curso.entity';
import { Repository } from 'typeorm';
export declare class CursoService {
    private cursoRepository;
    constructor(cursoRepository: Repository<CursoEntity>);
    createCurso(cursoDto: CursoDto): Promise<CursoEntity>;
    updateCurso(id: any, updateCursoDto: UpdateCursoDto): Promise<{
        curso: {
            codigo: number;
            descricao: string;
            ementa: string;
            update: Date;
            id: string;
            createAt: Date;
            updatedAt: Date;
        };
        update: import("typeorm").UpdateResult;
    }>;
}
