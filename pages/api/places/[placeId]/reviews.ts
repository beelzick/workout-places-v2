import clientPromise from '../../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@auth0/nextjs-auth0'
import { userId, userNickname } from '../../../../src/helpers/general'
import { ObjectId } from 'mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise
    const placesCollection = client.db('workout-places').collection('places')
    const placeId = req.query.placeId as string

    if (req.method === 'POST') {
        const session = getSession(req, res)
        if (!session) return res.status(400).json({ success: false })
        const { rating, description } = req.body
        await placesCollection.updateOne(
            { _id: new ObjectId(placeId) },
            {
                $addToSet: {
                    reviews: {
                        _id: new ObjectId(),
                        description: description,
                        rating: rating,
                        authorId: userId(session!.user.sub),
                        author: userNickname(session!.user.nickname)
                    }
                }
            }
        )
        res.status(200).json({ success: true })
    } else if (req.method === 'GET') {
        const reviews: any = await placesCollection.aggregate([
            { $match: { _id: new ObjectId(placeId) } },
            { $project: { reviews: 1, _id: 0 } },
            { $limit: 16 }
        ]).toArray()

        res.status(200).json({ reviews: reviews[0].reviews })
    }
}

export default handler