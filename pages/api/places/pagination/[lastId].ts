import clientPromise from '../../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'mongodb'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const lastId = req.query.lastId as string
        const client = await clientPromise
        const collection = client.db('workout-places').collection('places')
        const placesData = await collection.find({ _id: { $gte: new ObjectId(lastId) } }).limit(15).toArray()
        const hasMore = placesData.length < 15 ? false : true
        res.status(200).json({ placesData, hasMore })
    }
}

export default handler