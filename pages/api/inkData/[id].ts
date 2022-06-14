import type {NextApiRequest, NextApiResponse} from 'next'
import { DataType } from "../../../types/dataType";
import { trimData } from "../../../util/trimData";
import inks from "../../../util/inkData";

export default function inkHandler(req : NextApiRequest, res : NextApiResponse) {
    const {
        query: { id }
    } = req

    res.status(200).json({ data: trimData(inks[parseInt(<string>id)]) })
}

