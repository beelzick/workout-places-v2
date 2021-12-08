import Image from 'next/image'
import styles from './SectionRight.module.css'
import Link from 'next/link'

const SectionRight = () => {
    return (
        <section className={styles.container}>
            <Image
                src='https://res.cloudinary.com/dfvpybkta/image/upload/v1638056336/workout-places-new/sec-right_a5uahx.jpg'
                objectFit='cover'
                layout='fill'
                quality={100}
                alt='Home Page Photo, Gym black and white'
            />
            <div className={styles.rightRedLayer} />
            <div className={styles.content}>
                <Link href='/places'>
                    <a className={styles.h2}>
                        show places
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default SectionRight