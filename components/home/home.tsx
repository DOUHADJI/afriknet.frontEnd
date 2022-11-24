import { FunctionComponent } from 'react'
import Footer from '../shared/footer/footer'
import MyNavbar from '../shared/navbars/homeNavbar'
import Banner from './homeComponents/banner'
import MiddlePageBanner from './homeComponents/middlePageBanner'
import Offers from './homeComponents/offers/offers'
import Services from './homeComponents/services/services'

const Home: FunctionComponent = () => {
  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <MyNavbar />
      <Banner />
      <Services />
      <Offers />
      <MiddlePageBanner />
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Home
