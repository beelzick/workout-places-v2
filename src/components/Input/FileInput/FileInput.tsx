import styles from './FileInput.module.css'
import { UseFormRegister, Path } from 'react-hook-form'

interface Props {
    name: Path<Inputs>
    register: UseFormRegister<Inputs>
    error?: string
}

const FileInput = ({ name, register, error }: Props) => {
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
            <span>{error}</span>
        </div>
    )
}

export default FileInput