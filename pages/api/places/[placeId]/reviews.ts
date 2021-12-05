import clientPromise from '../../../../lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { userId } from '../../../../src/helpers/general'
import { ObjectId } from 'mongodb'

const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise
    const placesCollection = client.db('workout-places').collection('places')
    const session = getSession(req, res)
    if (req.method === 'POST') {
        const { rating, description } = req.body
        await placesCollection.updateOne(
            { _id: new ObjectId(req.query.placeId as string) },
            {
                $addToSet: {
                    reviews: {
                        _id: new ObjectId(),
                        description: description,
                        rating: rating,
                        author: userId(session!.user.sub)
                    }
                }
            }
        )
    }
})

export default handler