import styles from './Input.module.css'
import { ReactNode } from 'react'
import { UseFormRegister, Path } from 'react-hook-form'

interface Props {
    type?: string
    name: Path<Inputs>
    children: ReactNode
    placeholder?: string
    bottomBreak?: boolean
    register: UseFormRegister<Inputs>
    step?: string
    defaultValue?: string | number
    error?: string
}

const Input = ({
    type,
    name,
    children,
    placeholder,
    bottomBreak,
    register,
    step,
    defaultValue,
    error
}: Props) => {
    return (
        <div style={{ marginBottom: bottomBreak ? '12px' : 'unset' }}>
            <label htmlFor={name}>
                {children}
            </label>
            <input
                placeholder={placeholder}
                id={name}
                type={type}
                className={styles.input}
                {...register(name)}
                step={step}
                defaultValue={defaultValue}
            />
            <span className={styles.error}>
                {error}
            </span>
        </div>
    )
}

export default Input