import styles from './Drawer.module.css'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { IsOpenContext } from '../Mobile'
import Button from '../../../../Button/Button'
import { useUser } from '@auth0/nextjs-auth0'
import { handleSingInClick, handleSignOutClick } from '../../../../../helpers/auth'

const Drawer = () => {
    const { isOpen, setIsOpen } = useContext(IsOpenContext)
    const { user } = useUser()
    const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

    if (!isOpen) return null

    const handleClick = () => {
        setIsOpen(false)
    }

    return ReactDOM.createPortal(
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <button className={styles.close} onClick={handleClick}>
                        <MdClose fontSize='35px' color='#DA2C38' />
                    </button>
                    <div className={styles.buttons}>
                        <Button
                            variant='outlined'
                            color='primary'
                            emotion='width: 200px;'
                            nextLink
                            href='/places'
                        >
                            All Places
                        </Button>
                        <Button
                            variant='outlined'
                            color='primary'
                            emotion='margin-top: 15px; width: 200px'
                            nextLink
                            href='/places/new'
                        >
                            Add Place
                        </Button>
                        {user ? (
                            <Button
                                variant='contained'
                                color='primary'
                                emotion='margin-top: 15px; width: 200px'
                                onClick={handleSignOutClick}
                            >
                                sign out
                            </Button>
                        ) : (
                            <Button
                                variant='contained'
                                color='primary'
                                emotion='margin-top: 15px; width: 200px'
                                onClick={handleSingInClick}
                            >
                                sign in
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <style global jsx>{`
            html {
                overflow: hidden;
                margin-right: ${scrollbarWidth};
            }
            `}
            </style>
        </>,
        document.body)
}

export default Drawer