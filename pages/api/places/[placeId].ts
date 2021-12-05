import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongodb'
import geocoder from '../../../lib/geocoder'
import { getSession } from '@auth0/nextjs-auth0'
import { userId } from '../../../src/helpers/general'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res)
    if (!session) {
        return res.status(401)
    }
    const { placeId } = req.query
    const client = await clientPromise
    const placesCollection = client.db('workout-places').collection('places')
    const placeData = await placesCollection.findOne({ _id: new ObjectId(placeId as string) })
    if (placeData!.author !== userId(session.user.sub)) {
        return res.status(403)
    }
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