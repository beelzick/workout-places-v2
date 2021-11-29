import { ReactNode } from 'react'
import styles from './Layout.module.css'
import NavbarContainer from '../Navbar/NavbarContainer/NavbarContainer'
import NavbarContent from '../Navbar/NavbarContent/NavbarContent'
import NavbarLeft from '../Navbar/NavbarLeft/NavbarLeft'
import NavbarRight from '../Navbar/NavbarRight/NavbarRight'
interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <NavbarContainer>
                <NavbarContent
                    left={<NavbarLeft />}
                    right={<NavbarRight />}
                />
            </NavbarContainer>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout