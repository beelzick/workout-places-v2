import SectionLeft from './SectionLeft/SectionLeft'
import SectionRight from './SectionRight/SectionRight'
import styles from './HomeContent.module.css'

const HomeContent = () => {
    return (
        <div className={styles.container}>
            <SectionLeft />
            <SectionRight />
        </div >
    )
}

export default HomeContent