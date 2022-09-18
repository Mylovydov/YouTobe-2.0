import { IAuthFormFields } from '@/components/layout/header/auth-form/auth-form.interface'
import { IAuthData } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { toastError } from '@/utils/api.utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'


export const register = createAsyncThunk<IAuthData, IAuthFormFields>(
	'auth/register',
	async ({ email, password }, thunkAPI): Promise<any> => {
		try {
			const response = await AuthService.registration(email, password)
			toastr.success('Registration', 'Successfully completed!')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFormFields>(
	'auth/login',
	async ({ email, password }, thunkAPI): Promise<any> => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Sign In', 'Successfully completed!')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})