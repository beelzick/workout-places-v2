import styles from './LeaveReview.module.css'
import ReviewRating from '../../../External/ReviewRating';
import Button from '../../../Button/Button'
const LeaveReview = () => {
    return (
        <div className={styles.container}>
            <h2>Leave a Review</h2>
            <div className={styles.rate}>
                <ReviewRating size='large' />
            </div>
            <h3>Review</h3>
            <textarea rows={5} />
            <Button color='primary' variant='contained'>
                submit
            </Button>
        </div>
    )
}

export default LeaveReview