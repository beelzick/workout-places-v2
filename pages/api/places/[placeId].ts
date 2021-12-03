import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb'
import geocoder from '../../../lib/geocoder'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise
    const placesCollection = client.db('workout-places').collection('places')
    const { placeId } = req.query
    if (req.method === 'PATCH') {
        const { body: { location, description, entry, name } } = req
        const geoData = await geocoder.forwardGeocode({
            query: location,
            limit: 1
        }).send()
        placesCollection.findOneAndUpdate(
            { _id: new ObjectId(placeId as string) },
            {
                $set: {
                    name,
                    description,
                    location,
                    geometry: geoData.body.features[0].geometry,
                    entry: parseInt(entry)
                }
            }
        )
        res.status(200).json({ success: true })
    } else if (req.method === 'DELETE') {
        placesCollection.findOneAndDelete({ _id: new ObjectId(placeId as string) })
        res.status(200).json({ success: true })
    } else {
        res.status(500)
    }
}

export default handler