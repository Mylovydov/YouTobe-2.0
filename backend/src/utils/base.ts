import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { IsOptional } from 'class-validator'

export abstract class Base {
	@IsOptional({ always: true })
	@PrimaryGeneratedColumn()
	id: number

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date
}
