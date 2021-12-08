import styles from './Reviews.module.css'
import Review from './Review/Review'
import { useContext, useEffect, useState } from 'react'
import { CurrentPlaceContext } from '../../../../../pages/_app'
import axios from 'axios'

const Reviews = () => {
    const { currentPlace: { _id } } = useContext(CurrentPlaceContext)
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        if (_id) {
            const fetchReviews = async () => {
                const { data } = await axios.get(`/api/places/${_id}/reviews`)
                setReviews(data.reviews)
            }
            fetchReviews()
        }
    }, [_id])

    return (
        <div className={styles.container}>
            {reviews.map(({ description, rating, author, authorId, _id }) => (
                <Review
                    rating={rating}
                    description={description}
                    author={author}
                    authorId={authorId}
                    _id={_id}
                    key={_id}
                />
            ))}
        </div>
    )
}

export default Reviews