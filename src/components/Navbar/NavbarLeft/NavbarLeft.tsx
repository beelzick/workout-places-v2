import Button from '../../Button/Button'
import Logo from '../../Logo/Logo'
import styles from './NavbarLeft.module.css'
const NavbarLeft = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.buttons}>
                <Button color='primary' variant='contained'>
                    Add Place
                </Button>
            </div>
        </div>
    )
}

export default NavbarLeft