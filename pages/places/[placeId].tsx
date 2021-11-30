import { GetStaticPaths, GetStaticProps } from 'next'
import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb'

const Place = () => {
    return (
        <div>

        </div>
    )
}

export default Place

export const getStaticPaths: GetStaticPaths = async () => {
    const client = await clientPromise
    const placesData = await client.db('workout-places').collection('places').find({}).toArray()
    const places: Place[] = JSON.parse(JSON.stringify(placesData))
    const paths = places.map(place => {
        return {
            params: { placeId: place._id }
        }
    })
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async (context) => {
    const client = await clientPromise
    const placeId = context!.params!.placeId as string
    const placeData = await client.db('workout-places').collection('places').findOne({ _id: new ObjectId(placeId) })
    const place = JSON.parse(JSON.stringify(placeData))
    console.log(place)
    return {
        props: {}
    }
}