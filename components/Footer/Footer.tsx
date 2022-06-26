import { ColorType } from "../../types/colorType";
import getCorrectTextColor from "../../util/getCorrectTextColor";
import styles from "./Footer.module.scss"
import { AiFillGithub } from 'react-icons/ai'

type Props = {
    bgColor : ColorType
}

function Footer( { bgColor } : Props ) {
    return <div className={ styles.footer } style={{ color: getCorrectTextColor( bgColor ) }}>
        <a href="https://github.com/vis256/inkfind"> <AiFillGithub /> </a> 
    </div>
}

export default Footer;