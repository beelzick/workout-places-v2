/** @jsxImportSource @emotion/react */
import styles from './Container.module.css'
import { ReactNode } from 'react'
import { css } from '@emotion/react'

interface Props {
    children: ReactNode
    column?: boolean
    justifyContent?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right'
    alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'
    emotion?: string
}

const Container = ({ children, column, justifyContent, alignItems, emotion }: Props) => {
    const container = css`
    width: 100%;
    display: flex;
    flex-direction: ${column ? 'column' : 'row'};
    justify-content: ${justifyContent ? justifyContent : 'normal'};
    align-items: ${alignItems ? alignItems : 'normal'};
    ${emotion};
    `
    return (
        <div className={styles.container} css={container}>
            {children}
        </div >
    )
}

export default Container