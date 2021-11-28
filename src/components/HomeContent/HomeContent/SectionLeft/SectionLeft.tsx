import HomeSection from '../../HomeSection/HomeSection'
import styles from './SectionLeft.module.css'

const SectionLeft = () => {
    return (
        <HomeSection>
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    find your <span>best</span> <br /> training  <br /> <span>spot</span>
                </h1>
                <h2 className={styles.h2}>
                    and no more excuses
                </h2>
            </div>
        </HomeSection>
    )
}

export default SectionLeft