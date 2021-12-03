import styles from './Input.module.css'
import { ChangeEventHandler, ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    [key: string]: string
}

interface Props {
    type?: string
    name: string
    children: ReactNode
    placeholder?: string
    bottomBreak?: boolean
    register: UseFormRegister<InputProps>
    step?: string
    defaultValue?: string | number
}

const Input = ({ type, name, children, placeholder, bottomBreak, register, step, defaultValue }: Props) => {
    return (
        <div style={{ marginBottom: bottomBreak ? '16px' : 'unset' }}>
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
        </div>
    )
}

export default Input