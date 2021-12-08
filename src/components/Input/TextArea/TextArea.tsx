/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styles from './TextArea.module.css'
import { UseFormRegister, Path } from 'react-hook-form'

interface Props {
    name: Path<Inputs>
    emotion?: string
    labelText: string
    register: UseFormRegister<Inputs>
    defaultValue?: string
    error?: string
    disabled?: boolean
}

const TextArea = ({ name, emotion, labelText, register, defaultValue, error, disabled }: Props) => {
    const containerStyles = css`${emotion}`
    return (
        <div css={containerStyles}>
            <label htmlFor={name}>
                {labelText}
            </label>
            <textarea
                disabled={disabled}
                rows={5}
                id={name}
                {...register(name)}
                className={styles.textArea}
                defaultValue={defaultValue}
            />
            <span className={styles.error}>{error}</span>
        </div>
    )
}

export default TextArea