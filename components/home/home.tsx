import { FunctionComponent, useState } from 'react'
import Footer from '../footer/footer'
import MyNavbar from '../navbar/navbar'
import SignIn from '../signIn/signIn'
import SignUp from '../signUp/signUp'
import Banner from './homeComponents/banner'
import MiddlePageBanner from './homeComponents/middlePageBanner'
import Offers from './homeComponents/offers/offers'
import Services from './homeComponents/services/services'

const Home: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(false)
  const [userWantSignUp, setUserWantSignUp] = useState(false)

  return (
    <div className="relative">
      <MyNavbar
        setUserWantSignIn={setUserWantSignIn}
        setUserWantSignUp={setUserWantSignUp}
      />
      <Banner />
      <Offers />
      <MiddlePageBanner />
      <div className="">
        {/* <Services /> */}
        <Footer />
        <SignIn
          userWantSignIn={userWantSignIn}
          setUserWantSignIn={setUserWantSignIn}
          isBlur={false}
          closeButton={true}
          preventClose={true}
        />
        <SignUp
          userWantSignUp={userWantSignUp}
          setUserWantSignUp={setUserWantSignUp}
        />
      </div>
    </div>
  )
}

export default Home
