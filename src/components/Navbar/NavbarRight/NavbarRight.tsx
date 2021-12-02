import styles from './NavbarRight.module.css'
import Button from '../../Button/Button'
import { useUser } from '@auth0/nextjs-auth0'


interface Props {
    color: 'primary' | 'white'
    variant: 'outlined' | 'contained'
}

const NavbarRight = ({ color, variant }: Props) => {
    const { user, error, isLoading } = useUser();

    const handleSingInClick = () => {
        window.location.assign('/api/auth/login')
    }
    const handleSignOutClick = () => {
        window.location.assign('/api/auth/logout')
    }

    if (isLoading) return null

    return (
        <div className={styles.container}>
            {user ? (
                <Button
                    variant={variant}
                    color={color}
                    onClick={handleSignOutClick}
                >
                    sign out
                </Button>
            ) : (
                <Button
                    variant={variant}
                    color={color}
                    onClick={handleSingInClick}
                >
                    sign in
                </Button>
            )}
        </div>
    )
}

export default NavbarRight