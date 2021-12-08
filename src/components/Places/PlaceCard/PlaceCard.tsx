import styles from './PlaceCard.module.css'
import Image from 'next/image'
import Button from '../../Button/Button'

interface Props {
    name: string
    description: string
    location: string
    _id: string
    imgUrl: string
}

const PlaceCard = ({ name, description, location, _id, imgUrl }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={imgUrl}
                    layout='fill'
                    objectFit='cover'
                    alt={`Image of ${name}`}
                />
            </div>
            <div className={styles.detailsContainer}>
                <h2>{name}</h2>
                <p>
                    {description.length > 250 ? `${description.slice(0, 250)}...` : description}
                </p>
                <div />
                <small>{location}</small>
                <Button
                    variant='contained'
                    color='primary'
                    href={`/places/${_id}`}
                    emotion='margin-top: 40px;'
                    nextLink
                >
                    view place
                </Button>
            </div>
        </div>
    )
}

export default PlaceCard