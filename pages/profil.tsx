import UserSpaceLayout from '../components/userSpace/userSpaceLayout'
import { FunctionComponent } from 'react'
import UserSpaceProfil from '../components/userSpace/userSpaceComponents/profil/UserSpaceProfil'
import { useSession } from 'next-auth/react'

const Profil: FunctionComponent<{}> = ({}) => {
  const { data: session } = useSession()

  const user = session?.user

  return (
    <UserSpaceLayout user={user}>
      <UserSpaceProfil user={user} />
    </UserSpaceLayout>
  )
}

export default Profil
