import styles from './PlaceCard.module.css'
import Image from 'next/image'
import Button from '../../Button/Button'

interface Props {
    name: string
    description: string
    location: string
}

const PlaceCard = ({ name, description, location }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/v1634593106/WorkoutPlaces/gym-7.jpg'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={styles.detailsContainer}>
                <h2>{name}</h2>
                <p>
                    {description.length > 250 ? `${description.slice(0, 250)}...` : description}
                </p>
                <small>{location}</small>
                <div />
                <Button variant='contained' color='primary' emotion='margin-top: 30px;'>
                    view place
                </Button>
            </div>
        </div>
    )
}

export default PlaceCard