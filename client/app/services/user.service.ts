import { $api } from '../http/axios'
import { ApiPrefixEnum } from '@/types/api-prefix.enum'
import { AxiosResponse } from 'axios'

export const UserService = {
	getAll: async (query: string): Promise<AxiosResponse> => {
		const response = await $api.get(`${ApiPrefixEnum.USERS}/?${query}`)
		return response.data
	},
	getUserByFilter: async (query: string): Promise<AxiosResponse> => {
		console.log(query)
		const response = await $api.get(`${ApiPrefixEnum.USERS}/?${query}`)
		return response.data
	}
}
