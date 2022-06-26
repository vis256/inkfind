import styles from "../InkCard/InkCard.module.scss"
import lstyles from "./LoadingCard.module.scss"
import { getColorFromHex } from '../../types/colorType'
import getCorrectTextColor from '../../util/getCorrectTextColor'


function LoadingCard() {
    const color = "#" + ((1<<24)*Math.random() | 0).toString(16)

    return <div className={ [lstyles.container, styles.small].join(" ") } style={{ backgroundColor : color , color : getCorrectTextColor( getColorFromHex( color ) ) }}>
        <div className={ styles.colorInfo }> <wbr/> </div>

        <div className={ styles.inkInfo }>
            <div className={ styles.name }  >
                <div className={ lstyles.lds_ellipsis }><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </div>
}

export default LoadingCard;