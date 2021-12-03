import styles from './FileInput.module.css'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    [key: string]: string
}

interface Props {
    name: string
    register: UseFormRegister<InputProps>
}

const FileInput = ({ name, register }: Props) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name}>Add Images</label>
            <input
                type='file'
                id={name}
                className={styles.input}
                accept='image/png, image/jpeg, image/jpg'
                {...register(name)}
            />
        </div>
    )
}

export default FileInput