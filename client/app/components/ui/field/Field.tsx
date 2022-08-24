import styles from './Field.module.scss'
import { IField } from '@/components/ui/field/field.interface'
import React, { forwardRef } from 'react'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input type={type} ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field