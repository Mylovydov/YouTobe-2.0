import { $api } from '../http/axios'
import { ApiPrefixEnum } from '@/types/api-prefix.enum'
import { IUser } from '@/types/user.interface'
import { AxiosResponse } from 'axios'

export const UserService = {
	getAll: async (): Promise<AxiosResponse<IUser[]>> => {
		return await $api.get<IUser[]>(`/${ApiPrefixEnum.USER}`)
	},
	getUser: async (id: number): Promise<AxiosResponse<IUser>> => {
		return await $api.get<IUser>(`${ApiPrefixEnum.USER}/by-id/${id}`)
	}
}