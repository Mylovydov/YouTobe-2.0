import styles from './Header.module.scss'
import IconsRight from '@/components/layout/header/icons-right/IconsRight'
import Search from '@/components/layout/header/search/Search'
import React, { FC } from 'react'


const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header