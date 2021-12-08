import { ReactNode } from 'react'
import styles from './NavbarContainer.module.css'

interface Props {
    children: ReactNode
}

const NavbarContainer = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
export default NavbarContainer