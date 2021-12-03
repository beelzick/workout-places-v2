import clientPromise from '../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import geocoder from '../../lib/geocoder'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise
    const placesCollection = client.db('workout-places').collection('places')
    if (req.method === 'GET') {
        const places = await placesCollection.find({}).toArray()
        res.status(200).json({ places })
    } else if (req.method === 'POST') {
        const { body } = req
        const geoData = await geocoder.forwardGeocode({
            query: body.location,
            limit: 1
        }).send()
        await placesCollection.insertOne({
            ...body,
            entry: parseInt(body.entry),
            addDate: new Date(body.addDate),
            geometry: geoData.body.features[0].geometry,
            reviews: []
        })
        res.status(200).json({ success: true })
    }
}

export default handler