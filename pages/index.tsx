import type { NextPage } from 'next'
import MainPage from '../components/Main/Main'

const Home: NextPage = () => {
  return <MainPage queryOnLoad={false} defaultHex={ {r : 126, g : 20, b : 150} } />
}

export default Home
