import styles from './Button.module.scss'
import { IButton } from '@/components/ui/button/button.interface'
import cn from 'classnames'
import React, { FC } from 'react'


const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button