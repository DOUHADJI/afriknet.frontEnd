import { FunctionComponent, useState } from 'react'
import UserSpaceHome from '../components/userSpace/userSpaceHome'
import { useSession, signIn, signOut } from 'next-auth/react'
import SignInPage from '../components/signIn/signIn'

const UserHome: FunctionComponent = () => {
  const [userWantSignIn, setUserWantSignIn] = useState(true)
  const { data: session } = useSession()
  const user = {}

  if (session) {
    return <UserSpaceHome user={session.user} />
  } else {
    return (
      <div>
        <UserSpaceHome user={user} />
        <SignInPage
          userWantSignIn={true}
          setUserWantSignIn={setUserWantSignIn}
          isBlur={false}
        />
      </div>
    )
  }

  /*   return <UserSpaceHome user={session.user} /> */
}
export default UserHome
