import { useCallback, useRef, useState } from 'react'
import { RgbColorPicker } from 'react-colorful'
import { ColorType, getHex } from '../../types/colorType'
import styles from './SearchInput.module.scss'
import useOnClickOutside from 'use-onclickoutside'

type Props = {
    bgColor : ColorType,
    searchInk : Function
}

function SearchInput( {bgColor, searchInk} : Props ) {
    const [isOpen, toggleOpen] = useState(false)
    const [ tempColor, setTempColor ] = useState(bgColor)
    const popover = useRef(null)

    const close = useCallback(() => toggleOpen(false), [])
    useOnClickOutside(popover, close)

    function handleClick() {
        searchInk( tempColor )
    }

    return (
        <div className={ styles.container }>
            <div
                className={ styles.swatch }
                style={{backgroundColor: getHex(bgColor)}}
                onClick={() => toggleOpen(true)}
            />

            {isOpen && <div className={ styles.popover } ref={ popover }>
                <RgbColorPicker className={ styles.colorPicker } color={ tempColor } onChange={ setTempColor } />
                <button className={ styles.button } onClick={ handleClick }>Find</button>
            </div>}

        </div>
    )
}

export default SearchInput;