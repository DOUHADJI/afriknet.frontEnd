import { FunctionComponent, useState } from 'react'
import SignIn from '../auth/signIn'
import Footer from '../shared/footer/footer'

import MyNavbar from '../shared/navbars/homeNavbar/HomeNavbar'
import Banner from './homeComponents/banner'
import MiddlePageBanner from './homeComponents/middlePageBanner'
import Offers from './homeComponents/offers/offers'
import Services from './homeComponents/services/services'

const Home: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(false)

  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <MyNavbar setUserWantSignIn={setUserWantSignIn} />
      <Banner />
      <Services />
      <Offers />
      <MiddlePageBanner />
      <div className="">
        <Footer />
        <SignIn
          userWantSignIn={userWantSignIn}
          setUserWantSignIn={setUserWantSignIn}
          isBlur={false}
          closeButton={true}
          preventClose={true}
        />
      </div>
    </div>
  )
}

export default Home
