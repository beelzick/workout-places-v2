/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { returnColor } from '../../helpers/ButtonHelpers'
import styles from './Button.module.css'

interface Props {
    children: ReactNode
    variant?: 'contained' | 'outlined'
    color: 'primary' | 'secondary' | 'white'
    emotion?: string
}

const Button = ({ children, variant, color, emotion }: Props) => {
    const btnColor = returnColor(color)
    return (
        <button
            className={styles.button}
            css={css`
                color: ${btnColor};
                ${variant === 'contained' && (
                    `
                    background-color: ${btnColor};
                    color: ${color === 'white' ? '#000' : '#fff'};
                    border: 2px solid ${btnColor};
                    `
                )}
                ${variant === 'outlined' && (
                    `
                    border: 2px solid ${btnColor};
                    `
                )}
                ${emotion};
            `}
        >
            {children}
        </button>
    )
}

export default Button