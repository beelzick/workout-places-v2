import Button from '../../../Button/Button'
import styles from './NavRight.module.css'

const NavRight = () => {
    return (
        <div>
            <Button variant='outlined' color='white' emotion='margin-right: 10px'>
                log in
            </Button>
            <Button variant='outlined' color='white'>
                register
            </Button>
        </div>
    )
}

export default NavRight