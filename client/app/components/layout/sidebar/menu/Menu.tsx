import styles from './Menu.module.scss'
import MenuItem from '@/components/layout/sidebar/menu/MenuItem'
import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface'
import Line from '@/components/ui/Line'
import React, { FC } from 'react'


export interface IMenu {
	title: string
	items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ title, items }) => {
	return (
		<nav className={styles.menu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem key={menuItem.link} item={menuItem} />
				))}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu