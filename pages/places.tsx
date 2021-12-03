import Map from '../src/components/Map/Map'
import CardsContainer from '../src/components/Places/CardsContainer/CardsContainer'
import PlaceCard from '../src/components/Places/PlaceCard/PlaceCard'
import PlacesContainer from '../src/components/Places/PlacesContainer/PlacesContainer'
import { GetStaticProps } from 'next'
import clientPromise from '../lib/mongodb'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import axios from 'axios'

interface Props {
    results: Place[]
}

const Places = ({ results }: Props) => {
    const [places, setPlaces] = useState(results)
    const [hasMore, setHasMore] = useState(true)
    const lastId = places[places.length - 1]._id

    const getMorePlaces = async () => {
        const { data: { placesData, hasMore } } = await axios.get(`/api/places/pagination/${lastId}`)
        const newPlaces = placesData
        setHasMore(hasMore)
        setPlaces(prevPlaces => [...prevPlaces, ...newPlaces])
    }

    return (
        <PlacesContainer>
            <Map />
            <CardsContainer>
                <InfiniteScroll
                    dataLength={places.length}
                    next={getMorePlaces}
                    loader={<div>Loading...</div>}
                    style={{ overflow: 'hidden' }}
                    hasMore={hasMore}
                >
                    {places.map(({ name, description, location, _id, imgUrl }) => (
                        <PlaceCard
                            key={_id}
                            name={name}
                            description={description}
                            location={location}
                            _id={_id}
                            imgUrl={imgUrl}
                        />
                    ))}
                </InfiniteScroll>
            </CardsContainer>
        </PlacesContainer>
    )
}

export default Places

export const getStaticProps: GetStaticProps = async () => {
    const client = await clientPromise
    const data = await client.db('workout-places').collection('places').find({}).limit(15).toArray()
    const results = JSON.parse(JSON.stringify(data))

    return {
        props: {
            results
        }
    }
}