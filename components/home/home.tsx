import { FunctionComponent } from 'react'
import Footer from '../footer/footer'
import MyNavbar from '../navbar/navbar'
import Banner from './homeComponents/banner'
import MiddlePageBanner from './homeComponents/middlePageBanner'
import Offers from './homeComponents/offers/offers'

const Home: FunctionComponent = () => {
  return (
    <div className='relative'>
      <MyNavbar />
      <Banner />
      <MiddlePageBanner />
      <div className="bg-[url('/images/ill_4.jpg')] bg-cover bg-center">
      <Offers />
      <Footer />
      </div>
      
    </div>
  )
}

export default Home
