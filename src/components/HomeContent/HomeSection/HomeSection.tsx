import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './HomeSection.module.css'

interface Props {
    children: ReactNode
    right?: boolean
}

const HomeSection = ({ children, right }: Props) => {
    return (
        <div className={classNames(styles.container, right && styles.right)}>
            {children}
        </div>
    )
}

export default HomeSection