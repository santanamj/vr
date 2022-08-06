import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CursoData1659559017622 } from 'src/migrations/1659559017622-CursoData';
import { AlunoData1659560844370 } from 'src/migrations/1659560844370-AlunoData';
import { CursoalunoData1659571799745 } from 'src/migrations/1659571799745-CursoAlunoData';
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'vr',
  "entities": ["dist/**/*.entity.js"],
  // "migrations": [CursoData1659559017622, AlunoData1659560844370, CursoalunoData1659571799745],
  "cli": {
    "migrationsDir": [
      "./../src/migrations/"
    ],
    "entitiesDir": "./../src/entity",
   
  },
  synchronize: true,
  autoLoadEntities: true,
migrationsRun: false
} as TypeOrmModuleOptions
