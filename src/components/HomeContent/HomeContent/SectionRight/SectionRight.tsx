import HomeSection from '../../HomeSection/HomeSection'
import Image from 'next/image'
import styles from './SectionRight.module.css'

const SectionRight = () => {
    return (
        <HomeSection right>
            <Image
                src='https://res.cloudinary.com/dfvpybkta/image/upload/v1638056336/workout-places-new/sec-right_a5uahx.jpg'
                objectFit='cover'
                layout='fill'
                quality={100}
            />
            <div className={styles.rightRedLayer} />
            <div className={styles.content}>
                <h2 className={styles.h2}>
                    show places
                </h2>
            </div>
        </HomeSection>
    )
}

export default SectionRight