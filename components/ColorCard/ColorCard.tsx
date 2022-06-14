import styles from "../InkCard/InkCard.module.scss"
import { ColorType, getHex } from '../../types/colorType'
import getCorrectTextColor from '../../util/getCorrectTextColor'

type Props = {
    color : ColorType
}


function ColorCard( { color } : Props ) {
    return <div className={ [styles.container, styles.small].join(" ") } style={{ backgroundColor : getHex( color ), color : getCorrectTextColor( color ) }}>
        <div className={ styles.colorInfo }>{ getHex(color) }</div>

        <div className={ styles.inkInfo }>
            <div className={ styles.name }  >
                Your color
            </div>
        </div>
    </div>
}

export default ColorCard;