import FaqPage from '../components/userSpace/userSpaceComponents/faqPage'
import UserSpaceLayout from '../components/userSpace/userSpaceLayout'
import { FunctionComponent, useState } from 'react'
import { useSession } from 'next-auth/react'
import SignInPage from '../components/signIn/signIn'

const Faq: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(true)
  const { data: session } = useSession()
  const user = session?.user

  if(session){
    return (
      <UserSpaceLayout user={user}>
        <FaqPage />
      </UserSpaceLayout>
    )
  }else{
    return (
      <div>
        <SignInPage
          userWantSignIn={true}
          setUserWantSignIn={setUserWantSignIn}
          isBlur={false}
          closeButton={false}
          preventClose={true}
        />
      </div>
    )
  }

 
}

export default Faq
