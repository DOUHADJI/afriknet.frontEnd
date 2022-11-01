import UserSpaceLayout from '../components/userSpace/userSpaceLayout'
import { FunctionComponent , useState} from 'react'
import UserSubscriptionsAndPackagesList from '../components/userSpace/userSpaceComponents/userSbcrtionsAndPckge'
import { useSession } from 'next-auth/react'
import SignInPage from '../components/signIn/signIn'

const UserAbonnementsHistory: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(true)

  const { data: session } = useSession()

  const user = session?.user
if(session){
  return (
    <UserSpaceLayout user={user}>
      <UserSubscriptionsAndPackagesList />
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

export default UserAbonnementsHistory
