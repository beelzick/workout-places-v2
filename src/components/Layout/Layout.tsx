import styles from './Layout.module.css'
import NavbarContainer from '../Navbar/NavbarContainer/NavbarContainer'
import NavbarContent from '../Navbar/NavbarContent/NavbarContent'
import NavbarLeft from '../Navbar/NavbarLeft/NavbarLeft'
import NavbarRight from '../Navbar/NavbarRight/NavbarRight'
import { useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    const [isHome, setIsHome] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === '/') {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [router])

    return (
        <div className={styles.container}>
            <NavbarContainer>
                <NavbarContent
                    left={<NavbarLeft home={isHome} />}
                    right={<NavbarRight home={isHome} />}
                />
            </NavbarContainer>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout


{/* <NavbarContent
left={isHome ? (
    <Logo />
) : (
    <NavbarLeft />
)}
right={
    <NavbarRight
        color={isHome ? 'white' : 'primary'}
        variant={isHome ? 'outlined' : 'contained'}
    />
}
/> */}