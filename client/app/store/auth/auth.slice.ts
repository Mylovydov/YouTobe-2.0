import { register } from '@/store/auth/auth.actions'
import { IAuthInitialState } from '@/store/auth/auth.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IAuthInitialState = {
	user: null,
	accessToken: '',
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.accessToken = payload.accessToken
				state.user = payload.user
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.accessToken = ''
				state.user = null
			})
	}
})