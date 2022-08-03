import { CursoDto } from 'src/dtos/create-curso.dto';
import { UpdateCursoDto } from 'src/dtos/update-curso.dto';
import { CursoService } from 'src/services/curso.service';
export declare class CursoController {
    private cursoService;
    constructor(cursoService: CursoService);
    create(curso: CursoDto): Promise<import("../../entity/curso.entity").CursoEntity>;
    updateCurso(id: string, updateCurso: UpdateCursoDto): Promise<{
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
