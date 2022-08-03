import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '02ms11d4',
  database: 'vr',
  "entities": ["dist/**/*.entity.js"],
  "migrations": [
    "./../src/migrations/**/*.ts"
  ],
  "cli": {
    "migrationsDir": [
      "./../src/migrations/"
    ],
    "entitiesDir": "./../src/entity",
    synchronize: false,
  migrationsRun: false
  }
} as TypeOrmModuleOptions