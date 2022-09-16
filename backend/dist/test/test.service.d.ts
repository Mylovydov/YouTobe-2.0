import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Test } from '../entities/test.entity';
export declare class TestService extends TypeOrmCrudService<Test> {
    readonly repo: any;
    constructor(repo: any);
}
