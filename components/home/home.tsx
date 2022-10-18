import { FunctionComponent, useState } from 'react'
import Footer from '../footer/footer'
import MyNavbar from '../navbar/navbar'
import SignIn from '../signIn/signIn'
import SignUp from '../signUp/signUp'
import Banner from './homeComponents/banner'
import MiddlePageBanner from './homeComponents/middlePageBanner'
import Offers from './homeComponents/offers/offers'

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
      <MiddlePageBanner />
      <div className="bg-[url('/images/ill_4.jpg')] bg-cover bg-center">
        <Offers />
        <Footer />
        <SignIn
          userWantSignIn={userWantSignIn}
          setUserWantSignIn={setUserWantSignIn}
          isBlur={false}
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
