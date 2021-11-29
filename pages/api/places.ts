import clientPromise from '../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const client = await clientPromise
        const places = await client.db('workout-places').collection('places').find({}).toArray()
        res.status(200).json({ places })
    }
}

export default handler