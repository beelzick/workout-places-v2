import styles from './NavbarContent.module.css'
import { ReactNode } from 'react'

interface Props {
    left: ReactNode
    right: ReactNode
}

const NavbarContent = ({ left, right }: Props) => {
    return (
        <div className={styles.container}>
            {left}
            {right}
        </div>
    )
}

export default NavbarContent