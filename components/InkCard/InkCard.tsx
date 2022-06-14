import {InkDataType} from "../../types/inkDataType";
import useSwr, {SWRResponse} from "swr";
import styles from "./InkCard.module.scss"
import getCorrectTextColor from "../../util/getCorrectTextColor";
import { getHex } from "../../types/colorType";

const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json())

type Props = {
    ink : {
        i : number,
        d : number
    }
}

function InkCard( { ink } : Props ) {
    const { data, error }: SWRResponse<{data : InkDataType}, boolean> = useSwr(`/api/inkData/${ink.i}`, fetcher)

    if (error) return <div>Failed to load user</div>
    if (!data) return <div>Loading...</div>

    const inkData : InkDataType = data.data;

    const fullNameLength = (inkData.companyName + inkData.inkName).length
    let containerWidth = styles.small

    if (fullNameLength > 30) {
        containerWidth = styles.wide
    }

    const colorHex = getHex( inkData.colors )

    return <div className={ [styles.container, containerWidth].join(" ") } style={{ backgroundColor: colorHex, color: getCorrectTextColor(inkData.colors)}}>
        <div className={ styles.colorInfo }>
            { colorHex }
            <p style={{ color: getCorrectTextColor(inkData.colors) + '80' }}>{Math.round(100 - (ink.d / 597) * 100)}% match</p>
        </div>

        <div className={ styles.inkInfo }>
            <div className={ styles.name }>
                <b>{inkData.companyName}</b> 
                {inkData.inkName}
            </div>
        </div>
    </div>
}

export default InkCard;