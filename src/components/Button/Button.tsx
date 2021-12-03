/** @jsxImportSource @emotion/react */
import { EventHandler, MouseEventHandler, ReactNode } from 'react'
import { css } from '@emotion/react'
import { returnColor } from '../../helpers/buttonHelpers'
import Link from 'next/link'

interface Props {
    children: ReactNode
    variant?: 'contained' | 'outlined'
    color: 'primary' | 'secondary' | 'white'
    emotion?: string
    href?: string
    nextLink?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    type?: 'button' | 'reset' | 'submit'
    disabled?: boolean
}

const Button = ({ children, variant, color, emotion, href, nextLink, onClick, type, disabled }: Props) => {
    const btnColor = returnColor(color)
    const styles = css`
    padding: 6px 16px;
    border: 2px solid transparent;
    background: unset;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    width: fit-content;
    text-transform: uppercase;
    line-height: 20.5px;
    font-weight: 500;
    letter-spacing: 0.0025em;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: ${btnColor};
    ${variant === 'contained' && (`
        background-color: ${btnColor};
        color: ${color === 'white' ? '#000' : '#fff'};
        border: 2px solid ${btnColor};
    `)}
    ${variant === 'outlined' && (`border: 2px solid ${btnColor};`)}
    &:disabled {
        background-color: rgba(0, 0, 0, 0.125);
        border-color: rgba(0, 0, 0, 0.125);
        color: rgba(0, 0, 0, 0.4);
        cursor: not-allowed;
    }
    ${emotion};
    `
    if (href && nextLink) {
        return (
            <Link href={href}>
                <a css={styles} onClick={onClick}>
                    {children}
                </a>
            </Link>
        )
    } else if (href) {
        return (
            <a css={styles} onClick={onClick}>
                {children}
            </a>
        )
    } else {
        return (
            <button disabled={disabled} onClick={onClick} css={styles} type={type}>
                {children}
            </button>
        )
    }

}

export default Button