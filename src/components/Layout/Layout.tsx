import styles from './Layout.module.css'
import NavbarContainer from '../Navbar/NavbarContainer/NavbarContainer'
import NavbarContent from '../Navbar/NavbarContent/NavbarContent'
import NavbarLeft from '../Navbar/NavbarLeft/NavbarLeft'
import NavbarRight from '../Navbar/NavbarRight/NavbarRight'
import { useEffect, useState } from 'react'

interface Props {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const [isHome, setIsHome] = useState(true)
    useEffect(() => {
        if (children.type.name === 'Home') {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [children.type.name])

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