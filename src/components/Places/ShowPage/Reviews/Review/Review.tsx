import styles from './Review.module.css'
import Rate from 'rc-rate'
import Button from '../../../../Button/Button'
import { MdOutlineDelete } from 'react-icons/md'
import { useUser } from '@auth0/nextjs-auth0'
import { useContext, useEffect, useState } from 'react'
import { userId } from '../../../../../helpers/general'
import axios from 'axios'
import { CurrentPlaceContext } from '../../../../../../pages/_app'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Review = ({ rating, description, author, _id: reviewId, authorId }: Review) => {
    const [visible, setVisilbe] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const { currentPlace: { _id: placeId } } = useContext(CurrentPlaceContext)
    const router = useRouter()
    const { user } = useUser()


    useEffect(() => {
        if (user) {
            const currentUserId = userId(user!.sub!)
            if ((currentUserId && authorId) && currentUserId === authorId) {
                setVisilbe(true)
            }
        }

    }, [user, authorId])

    const handleDeleteClick = () => {
        setBtnDisabled(true)
        toast.promise(
            axios.delete(`/api/places/${placeId}/reviews/${reviewId}`, {
                data: {
                    authorId
                }
            }),
            {
                pending: 'Pending',
                success: 'Review successfully deleted 🗑️',
                error: 'Couldn\'t delete your review🤯'
            }
        )
        router.reload()
    }

    return (
        <div className={styles.container}>
            <span>{author}</span>
            <Rate style={{ marginLeft: '-5px' }} value={rating} disabled={true} />
            <p className={styles.description}>
                {description}
            </p>
            {visible && (
                <Button
                    variant='outlined'
                    color='primary'
                    emotion='margin-top: 20px;'
                    onClick={handleDeleteClick}
                    disabled={btnDisabled}
                >
                    <MdOutlineDelete fontSize='18px' style={{ marginTop: '-4px' }} />
                    delete
                </Button>
            )}
        </div>
    )
}

export default Review