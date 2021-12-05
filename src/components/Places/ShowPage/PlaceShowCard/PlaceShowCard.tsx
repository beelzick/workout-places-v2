import styles from './PlaceShowCard.module.css'
import Image from 'next/image'
import Button from '../../../Button/Button'
import { MdOutlineDelete } from 'react-icons/md'
import moment from 'moment'
import { useContext } from 'react'
import { DeleteDialogVisibleContext } from '../ShowPage'
import { useUser } from '@auth0/nextjs-auth0'
import { userId } from '../../../../helpers/general'

const PlaceShowCard = (
    { place: { name,
        description,
        location,
        addDate,
        entry,
        _id,
        imgUrl,
        author,
        authorName
    } }: { place: Place }
) => {
    const { setDeleteDialogVisible } = useContext(DeleteDialogVisibleContext)
    const momentDate = moment().from(addDate, true)
    const { user, isLoading, error } = useUser()

    const handleDeleteClick = () => {
        setDeleteDialogVisible(true)
    }

    return (
        <div className={styles.container}>
            <Image
                src={imgUrl}
                objectFit='cover'
                height={500}
                width={728}
            />
            <div className={styles.content}>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <span>{location}</span>
                </div>
                <div>
                    Posted by <strong>{authorName}</strong>
                </div>
                <div>
                    {entry ? `${entry}$/entry` : 'Free entry'}
                </div>
                {user && (userId(user!.sub!) === author && (
                    <div className={styles.buttons}>
                        <Button
                            color='secondary'
                            variant='outlined'
                            emotion='margin-right: 10px;'
                            nextLink
                            href={`/places/${_id}/edit`}
                        >
                            Edit
                        </Button>
                        <Button color='primary' variant='outlined' onClick={handleDeleteClick}>
                            <MdOutlineDelete fontSize='18px' style={{ marginTop: '-4px' }} />
                            Delete
                        </Button>
                    </div>
                ))}
                <div>
                    {momentDate.slice(0, 1).toUpperCase() + momentDate.slice(1)} ago
                </div>
            </div>
        </div>
    )
}

export default PlaceShowCard