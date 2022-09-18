import { CrudGlobalConfig } from '@nestjsx/crud/lib/interfaces'

export const globalCrudOptions: CrudGlobalConfig = {
	query: {
		// limit: 5,
		// maxLimit: 10,
		cache: 2000
	},
	params: {
		id: {
			type: 'string',
			primary: true,
			field: 'id'
		},
		channelId: {
			type: 'string',
			field: 'channelId'
		}
	},
	routes: {
		updateOneBase: {
			allowParamsOverride: true
		},
		deleteOneBase: {
			returnDeleted: true
		}
	}
}
