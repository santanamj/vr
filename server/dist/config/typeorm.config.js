"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
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
//# sourceMappingURL=typeorm.config.js.map