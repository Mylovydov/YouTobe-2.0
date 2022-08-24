import { $api } from '../http/axios'
import { ApiPrefixEnum } from '@/types/api-prefix.enum'
import { IVideo } from '@/types/video.interface'
import { AxiosResponse } from 'axios'

export const VideoService = {
	getAll: async (): Promise<AxiosResponse<IVideo[]>> => {
		return $api.get<IVideo[]>(`${ApiPrefixEnum.VIDEO}`)
	},
	getMostPopularByViews: async (): Promise<AxiosResponse<IVideo[]>> => {
		return $api.get<IVideo[]>(`${ApiPrefixEnum.VIDEO}/most-popular`)
	}
}