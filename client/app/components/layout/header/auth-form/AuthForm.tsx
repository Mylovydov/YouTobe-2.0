import stylesIcon from '../icons-right/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import { useOutside } from '@/components/hooks/useOutside'
import { IAuthFormFields } from '@/components/layout/header/auth-form/auth-form.interface'
import { validEmail } from '@/components/layout/header/auth-form/auth.valid'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'


const AuthForm: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const [type, setType] = useState<'login' | 'registration'>('login')

	// const {isLoading} = useAuth()
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFormFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormFields> = data => {
		switch (type) {
			case 'login':
			case 'registration':
			default:
				return
		}
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#a4a4a4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Email is not valid'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'password is required',
							minLength: {
								value: 6,
								message: 'Password must be not less 6 characters'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
					/>

					<div className='mt-5 mb-3 text-center'>
						<Button onClick={() => setType('login')}>Sign In</Button>
					</div>
					<button className={styles.register} onClick={() => setType('registration')}>
						Sign Up
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm