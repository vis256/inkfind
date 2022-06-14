import type {NextApiRequest, NextApiResponse} from 'next'
import getInkDistances from "../../../util/getInkDistances";

export default function findInkHandler( req : NextApiRequest, res : NextApiResponse ) {
    const {
        query: { hex }
    } = req

    const found = getInkDistances( <string>hex )

    res.status(200).json({
        closestInks : [...found]
    })
}