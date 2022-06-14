import styles from './Main.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SearchInput from '../searchInput/searchInput'
import InkList from '../inkList/InkList'
import { GiSpiralArrow } from 'react-icons/gi'
import { ColorType, getHex, getColorFromHex } from '../../types/colorType'
import Footer from '../Footer/Footer'
import getCorrectTextColor from '../../util/getCorrectTextColor'

type Props = {
    queryOnLoad : boolean
}

function GetScrollInfo() {
  // https://stackoverflow.com/a/68609331
  const [isOnTop, setOnTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      setOnTop( !window.scrollY )
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isOnTop
}


function MainPage( { queryOnLoad } : Props ) {
  const router = useRouter()
  const [bgColor, setBgColor] = useState( {r : 126, g : 20, b : 150} )
  const [toQuery, setToQuery] = useState(false)

  function searchInk( hex : ColorType ) {
    setBgColor(hex)
    setToQuery(true)
  }

  useEffect(() => {
    if (queryOnLoad) {
      setBgColor( getColorFromHex( '#' + router.query.hex) )
      setToQuery(true)
    } 
  }, [router.isReady])

  const onTop = GetScrollInfo()
  
  return <>
      <div className={styles.background} style={{ backgroundColor: getHex( bgColor ) }}></div>
      <header className={ [ styles.container, ( onTop ? styles.expanded : styles.hidden ) ].join(" ") } style={{ backgroundColor: getHex( bgColor ) }}>
        <h1 className={ styles.mainText } style={{ color: getCorrectTextColor( bgColor ) }} >Inkfind</h1>
        <div className={ styles.inputContainer } >
          <SearchInput bgColor={bgColor} searchInk={ searchInk }  />
        </div>
      </header>
      { toQuery && <InkList color={ bgColor } /> }
    <Footer bgColor={ bgColor } />
    </>
}

export default MainPage
