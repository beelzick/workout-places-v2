import Button from '../Button/Button'
import { useUser } from '@auth0/nextjs-auth0'

const NavRight = () => {
    const { user, error, isLoading } = useUser();
    const handleSignInClick = () => {
        window.location.assign('/api/auth/login')
    }
    const handleSignOutClick = () => {
        window.location.assign('/api/auth/logout')
    }

    if (isLoading) return null

    return (
        <div>
            {user ? (
                <Button
                    variant='outlined'
                    color='white'
                    onClick={handleSignOutClick}
                >
                    sign out
                </Button>
            ) : (
                <Button
                    variant='outlined'
                    color='white'
                    onClick={handleSignInClick}
                >
                    sign in
                </Button>
            )}

        </div>
    )
}

export default NavRight