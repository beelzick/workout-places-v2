import { ReactNode } from 'react'
import styles from './CardsContainer.module.css'

interface Props {
    children: ReactNode
}

const CardsContainer = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default CardsContainer