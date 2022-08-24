import { IUser } from '@/types/user.interface'

export interface IAuthData {
	user: Pick<IUser, 'id' | 'email'> | null
	accessToken: string
}