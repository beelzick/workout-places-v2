import styles from './ShowPage.module.css'
import PlaceShowCard from './PlaceShowCard/PlaceShowCard'
import ShowPageMap from './ShowPageMap/ShowPageMap'
import LeaveReview from './LeaveReview/LeaveReview'
import Container from '../../Container/Container'

const ShowPage = ({ place }: { place: Place }) => {

    return (
        <div className={styles.pageContainer}>
            <Container>
                <div className={styles.contentPart}>
                    <PlaceShowCard place={place} />
                </div>
                <div className={styles.contentPart}>
                    <ShowPageMap place={place} />
                    <LeaveReview />
                </div>
            </Container>
        </div>
    )
}

export default ShowPage