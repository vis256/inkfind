import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useSwr, {SWRResponse} from 'swr'
import { ColorType, getHex } from '../../types/colorType'
import ColorCard from '../ColorCard/ColorCard'
import InkCard from "../InkCard/InkCard"
import styles from "./InkList.module.scss"

type Props = {
    color : ColorType
}

type APIData = {
    closestInks : Array<{i : number, d : number}>
}

const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json())

function InkList( { color }  : Props ) {
    const { data, error }: SWRResponse< APIData, boolean > = useSwr(`/api/find/${ getHex( color ).substring(1) }`, fetcher)
    const [itemsLoaded, setItemsLoaded] = useState(26)

    if (error) return <div>Failed to load user</div>
    if (!data) return <div>Loading...</div>

    const numberOfItemsToLoad = 8

    return <div className={ styles.container }>

        <InfiniteScroll
            dataLength={ itemsLoaded }
            next={ () => { setItemsLoaded(itemsLoaded + numberOfItemsToLoad) } }
            hasMore={ true }
            loader={<h4>Loading...</h4>}
            endMessage={<div>No more data</div>}
            className={ styles.infiniteScroll }
        >
            <ColorCard color={ color } />

            {data && data.closestInks.slice(0, itemsLoaded).map( (ink, index) => (
                <InkCard key={index} ink={ink} />
            ))}
        </InfiniteScroll>
    </div>
}

export default InkList
