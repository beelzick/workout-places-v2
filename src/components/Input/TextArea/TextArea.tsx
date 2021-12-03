/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styles from './TextArea.module.css'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    [key: string]: string
}

interface Props {
    name: string
    emotion?: string
    labelText: string
    register: UseFormRegister<InputProps>
}

const TextArea = ({ name, emotion, labelText, register }: Props) => {
    const containerStyles = css`${emotion}`
    return (
        <div css={containerStyles}>
            <label htmlFor={name}>{labelText}</label>
            <textarea rows={5} id={name} {...register(name)} className={styles.textArea} />
        </div>
    )
}

export default TextArea