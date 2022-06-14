import type { NextPage } from 'next'
import MainPage from '../components/Main/Main'

const Home: NextPage = () => {
  return <MainPage queryOnLoad={false} />
}

export default Home
