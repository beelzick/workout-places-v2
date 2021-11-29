import styles from './PlacesContainer.module.css'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PlacesContainer = ({ children }: Props) => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}
export default PlacesContainer