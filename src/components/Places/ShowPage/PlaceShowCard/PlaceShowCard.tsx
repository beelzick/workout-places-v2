import styles from './PlaceShowCard.module.css'
import Image from 'next/image'
import Button from '../../../Button/Button'
import { MdOutlineDelete } from 'react-icons/md'
import moment from 'moment'

const PlaceShowCard = ({ place }: { place: Place }) => {
    const momentDate = moment().from(place.addDate, true)
    return (
        <div className={styles.container}>
            <Image
                src={place.imgUrl}
                objectFit='cover'
                height={500}
                width={728}
            />
            <div className={styles.content}>
                <div>
                    <h1>{place.name}</h1>
                    <p>
                        {place.description}
                    </p>
                </div>
                <div>
                    <span>{place.location}</span>
                </div>
                <div>
                    Posted by <strong>bob</strong>
                </div>
                <div>
                    {place.entry ? `${place.entry}$/entry` : 'Free entry'}
                </div>
                <div className={styles.buttons}>
                    <Button color='secondary' variant='outlined' emotion='margin-right: 10px;'>
                        Edit
                    </Button>
                    <Button color='primary' variant='outlined'>
                        <MdOutlineDelete fontSize='18px' style={{ marginTop: '-4px' }} />
                        Delete
                    </Button>
                </div>
                <div>
                    {momentDate.slice(0, 1).toUpperCase() + momentDate.slice(1)} ago
                </div>
            </div>
        </div>
    )
}

export default PlaceShowCard