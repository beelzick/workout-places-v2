import Button from '../../Button/Button'
import Link from 'next/link'
import styles from './NavbarLeft.module.css'
import classNames from 'classnames'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

interface Props {
    home: boolean
}

const NavbarLeft = ({ home }: Props) => {
    const { user } = useUser()
    const router = useRouter()

    const handleClick = () => {
        if (!user) {
            toast.error('You have to be logged in to add a new place')
        } else {
            router.push('/places/new')
        }
    }

    return (
        <div className={classNames(styles.container, home && styles.home)}>
            <Link href='/'>
                <a className={styles.logo}>Workout Places</a>
            </Link>
            <div className={styles.buttons}>
                <Button
                    color='primary'
                    variant='outlined'
                    emotion='margin-right: 20px;'
                    nextLink
                    href='/places'
                >
                    All Places
                </Button>
                <Button
                    color='primary'
                    variant='outlined'
                    onClick={handleClick}
                >
                    Add Place
                </Button>
            </div>
        </div>
    )
}

export default NavbarLeft