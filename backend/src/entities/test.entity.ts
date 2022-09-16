import { Column, Entity } from 'typeorm'
import { Base } from '../utils/base'

@Entity({ name: 'test' })
export class Test extends Base {
	@Column({ type: String })
	name: string

	@Column({ type: String })
	description: string

	@Column({ type: Number })
	age: number
}
