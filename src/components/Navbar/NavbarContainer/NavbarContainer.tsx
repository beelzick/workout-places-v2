import { ReactNode } from 'react'
import styles from './NavbarContainer.module.css'
import classNames from 'classnames'
interface Props {
    children: ReactNode
    home?: boolean
}

const NavbarContainer = ({ children, home }: Props) => {
    return (
        <div className={classNames(styles.container, home && styles.home)}>
            {children}
        </div>
    )
}
export default NavbarContainer