import { BaseEntity } from 'typeorm';
export declare class CursoEntity extends BaseEntity {
    id: string;
    codigo: number;
    descricao: string;
    ementa: string;
    createAt: Date;
    updatedAt: Date;
}
