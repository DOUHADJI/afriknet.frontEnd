import UserSpaceLayout from '../components/userSpace/userSpaceLayout'
import { FunctionComponent } from 'react'
import UserSubscriptionsAndPackagesList from '../components/userSpace/userSpaceComponents/userSbcrtionsAndPckge'
import { useSession } from 'next-auth/react'

const UserAbonnementsHistory: FunctionComponent = () => {
  const { data: session } = useSession()

  const user = session?.user

  return (
    <UserSpaceLayout user={user}>
      <UserSubscriptionsAndPackagesList />
    </UserSpaceLayout>
  )
}

export default UserAbonnementsHistory
