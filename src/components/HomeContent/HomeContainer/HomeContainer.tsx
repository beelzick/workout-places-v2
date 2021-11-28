import styles from './HomeContainer.module.css'
import { ReactNode } from 'react'

interface Children {
    children: ReactNode
}

const HomeContainer = ({ children }: Children) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default HomeContainer