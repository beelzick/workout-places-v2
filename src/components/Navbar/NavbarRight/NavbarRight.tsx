import styles from './NavbarRight.module.css'
import Button from '../../Button/Button'
import { useUser } from '@auth0/nextjs-auth0'
import Mobile from './Mobile/Mobile';
import { handleSignOutClick, handleSingInClick } from '../../../helpers/auth'

interface Props {
    home: boolean
}

const NavbarRight = ({ home }: Props) => {
    const { user, isLoading } = useUser();

    if (isLoading) return null

    return (
        <>
            <div className={styles.containerDeskopt}>
                {user ? (
                    <Button
                        variant={home ? 'outlined' : 'contained'}
                        color={home ? 'white' : 'primary'}
                        onClick={handleSignOutClick}
                    >
                        sign out
                    </Button>
                ) : (
                    <Button
                        variant={home ? 'outlined' : 'contained'}
                        color={home ? 'white' : 'primary'}
                        onClick={handleSingInClick}
                    >
                        sign in
                    </Button>
                )}
            </div>
            <Mobile />
        </>
    )
}

export default NavbarRight