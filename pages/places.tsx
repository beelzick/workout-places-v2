import Map from '../src/components/Map/Map'
import CardsContainer from '../src/components/Places/CardsContainer/CardsContainer'
import PlaceCard from '../src/components/Places/PlaceCard/PlaceCard'
import PlacesContainer from '../src/components/Places/PlacesContainer/PlacesContainer'
import { GetStaticProps } from 'next'
import clientPromise from '../lib/mongodb'



const Places = ({ places }: Places) => {
    return (
        <PlacesContainer>
            <Map />
            <CardsContainer>
                {places.map(({ name, description, location, _id }) => (
                    <PlaceCard
                        key={_id}
                        name={name}
                        description={description}
                        location={location}
                    />
                ))}
            </CardsContainer>
        </PlacesContainer>
    )
}

export default Places

export const getStaticProps: GetStaticProps = async () => {
    const client = await clientPromise
    const result = await client.db('workout-places').collection('places').find({}).limit(15).toArray()
    const places = JSON.parse(JSON.stringify(result))

    return {
        props: {
            places
        }
    }
}