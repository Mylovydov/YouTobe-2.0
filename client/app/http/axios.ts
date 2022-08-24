import { getContentType } from '@/utils/api.utils'
import axios from 'axios'

export const API_URL = `${process.env.APP_URL}/api`

export const $api = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})