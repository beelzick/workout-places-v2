import styles from './Logo.module.css'
import Link from 'next/link'
const Logo = () => {
    return (
        <Link href='/'>
            <a className={styles.logo}>Workout Places</a>
        </Link>
    )
}

export default Logo