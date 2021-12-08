import styles from './Mobile.module.css'
import Drawer from './Drawer/Drawer';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'

interface IsOpenContextType {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const IsOpenContext = createContext<IsOpenContextType>({
    isOpen: false,
    setIsOpen: () => { }
})

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
    }

    const value = { isOpen, setIsOpen }

    return (
        <IsOpenContext.Provider value={value}>
            <div className={styles.mobile}>
                <button className={styles.hamburger} onClick={handleClick}>
                    <AiOutlineMenu fontSize='30px' color='#DA2C38' />
                </button>
            </div>
            <Drawer />
        </IsOpenContext.Provider>
    )
}

export default Mobile