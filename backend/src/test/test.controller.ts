import { Controller } from '@nestjs/common'
import { TestService } from './test.service'
import { Crud, CrudController } from '@nestjsx/crud'
import { Test } from '../entities/test.entity'

@Crud({
	model: {
		type: Test
	}
})
@Controller('test')
export class TestController implements CrudController<Test> {
	constructor(readonly service: TestService) {}
}
