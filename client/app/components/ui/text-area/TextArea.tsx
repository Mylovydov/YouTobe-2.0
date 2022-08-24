import stylesField from '../field/Field.module.scss'
import styles from './TextArea.module.scss'
import { ITextArea } from '@/components/ui/text-area/text-area.interface'
import React, { forwardRef } from 'react'


const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ error, style, ...rest }, ref) => {
	return (
		<div className={styles.editor}>
			<textarea ref={ref} style={style} {...rest}></textarea>
			{error && <div className={stylesField.error}>{error.message}</div>}
		</div>
	)
})

TextArea.displayName = 'TextArea'

export default TextArea