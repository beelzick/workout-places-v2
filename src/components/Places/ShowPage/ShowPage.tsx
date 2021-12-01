import styles from './ShowPage.module.css'
import PlaceShowCard from './PlaceShowCard/PlaceShowCard'
import ShowPageMap from './ShowPageMap/ShowPageMap'
import LeaveReview from './LeaveReview/LeaveReview'

const ShowPage = ({ place }: { place: Place }) => {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.contentPart}>
                    <PlaceShowCard place={place} />
                </div>
                <div className={styles.contentPart}>
                    <ShowPageMap place={place} />
                    <LeaveReview />
                </div>
            </div>
        </div>
    )
}

export default ShowPage