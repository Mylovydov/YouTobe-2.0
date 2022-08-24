import styles from './Sidebar.module.scss'
import Menu from '@/components/layout/sidebar/menu/Menu'
import { menu } from '@/components/layout/sidebar/menu/menu.data'
import Link from 'next/link'
import React, { FC } from 'react'


const Sidebar: FC = () => {
	// TODO get profile

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>YouTobe 2.0</a>
			</Link>

			<Menu title='MENU' items={menu} />

			<div className={styles.copy}>© 2022 YOUTOBE 2.0</div>
		</aside>
	)
}

export default Sidebar