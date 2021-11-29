import styles from './NavbarRight.module.css'
import Button from '../../Button/Button'

const NavbarRight = () => {
    return (
        <div className={styles.container}>
            <Button color='primary' variant='outlined' emotion='margin-right: 15px;'>
                login
            </Button>
            <Button color='primary' variant='contained'>
                register
            </Button>
        </div>
    )
}

export default NavbarRight