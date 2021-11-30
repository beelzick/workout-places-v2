/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { returnColor } from '../../helpers/ButtonHelpers'
import styles from './Button.module.css'
import Link from 'next/link'

interface Props {
    children: ReactNode
    variant?: 'contained' | 'outlined'
    color: 'primary' | 'secondary' | 'white'
    emotion?: string
    href?: string
}

const Button = ({ children, variant, color, emotion, href }: Props) => {
    const btnColor = returnColor(color)
    const btnCss = css`
    color: ${btnColor};
    ${variant === 'contained' && (`
        background-color: ${btnColor};
        color: ${color === 'white' ? '#000' : '#fff'};
        border: 2px solid ${btnColor};
    `)}
    ${variant === 'outlined' && (`border: 2px solid ${btnColor};`)}
    ${emotion};
    `

    if (href) {
        return (
            <Link href={href}>
                <a
                    className={styles.button}
                    css={btnCss}
                >
                    {children}
                </a>
            </Link>
        )
    } else {
        return (
            <button
                className={styles.button}
                css={btnCss}
            >
                {children}
            </button>
        )
    }

}

export default Button