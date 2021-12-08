import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'
import { userId } from '../../../../../src/helpers/general';
import clientPromise from '../../../../../lib/mongodb';
import { ObjectId } from 'mongodb';


const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const session = getSession(req, res)
        if (userId(session!.user.sub) === req.body.authorId) {
            const client = await clientPromise
            const { placeId, reviewId } = req.query
            client.db('workout-places').collection('places').updateOne(
                { _id: new ObjectId(placeId as string) },
                {
                    $pull:
                        { reviews: { _id: new ObjectId(reviewId as string) } }
                }
            )
            res.status(200)
        } else {
            res.status(403)
        }

    }
})



export default handler