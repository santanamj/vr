import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CursoData1659559017622 } from 'src/migrations/1659559017622-CursoData';
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '02ms11d4',
  database: 'vr',
  "entities": ["dist/**/*.entity.js"],
  "migrations": [CursoData1659559017622],
  "cli": {
    "migrationsDir": [
      "./../src/migrations/"
    ],
    "entitiesDir": "./../src/entity",
    synchronize: false,
  migrationsRun: false
  }
} as TypeOrmModuleOptions
