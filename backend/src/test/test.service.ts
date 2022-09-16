import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Test } from '../entities/test.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TestService extends TypeOrmCrudService<Test> {
	constructor(
		@InjectRepository(Test)
		readonly repo
	) {
		super(repo)
	}
}
