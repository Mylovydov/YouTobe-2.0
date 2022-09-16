import { TestService } from './test.service';
import { CrudController } from '@nestjsx/crud';
import { Test } from '../entities/test.entity';
export declare class TestController implements CrudController<Test> {
    readonly service: TestService;
    constructor(service: TestService);
}
