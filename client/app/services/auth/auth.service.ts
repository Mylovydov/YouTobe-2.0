import { $api } from '../../http/axios'
import { IAuthData } from '@/services/auth/auth.helper'
import { ApiPrefixEnum } from '@/types/api-prefix.enum'
import { AxiosResponse } from 'axios'

export const AuthService = {
	login: async (email: string, password: string): Promise<AxiosResponse<IAuthData>> => {
		return await $api.post<IAuthData>(`${ApiPrefixEnum.AUTH}/login`, {
			email,
			password
		})
	},
	registration: async (email: string, password: string): Promise<AxiosResponse<IAuthData>> => {
		return await $api.post<IAuthData>(`${ApiPrefixEnum.AUTH}/registration`, {
			email,
			password
		})
	}
}