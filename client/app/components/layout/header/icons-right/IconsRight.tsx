import styles from './IconsRight.module.scss'
import { useAuth } from '@/components/hooks/useAuth'
import AuthForm from '@/components/layout/header/auth-form/AuthForm'
import ProfileMenu from '@/components/layout/header/profile-menu/ProfileMenu'
import UploadVideo from '@/components/layout/header/upload-video/UploadVideo'
import React, { FC } from 'react'


const IconsRight: FC = () => {
	const { user } = useAuth()
	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}

export default IconsRight