import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',  
  host: 'localhost',
  port: 5432,  
  username: 'postgres',
  password: '02ms11d4',
  database: 'vr',
  "entities": ["dist/**/*.entity.js"],
  autoLoadEntities: true,
  synchronize: true

};