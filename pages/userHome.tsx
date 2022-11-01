import { FunctionComponent, useState } from 'react'
import UserSpaceHome from '../components/userSpace/userSpaceHome'
import { useSession, signIn, signOut } from 'next-auth/react'
import SignInPage from '../components/signIn/signIn'
import { useRouter } from 'next/router'

const UserHome: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(true)
  const { data: session } = useSession()
  const user = {}

  const router = useRouter()

  if (session) {
    return <UserSpaceHome user={session.user} />
  } else {
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

  /*   return <UserSpaceHome user={session.user} /> */
}
export default UserHome
