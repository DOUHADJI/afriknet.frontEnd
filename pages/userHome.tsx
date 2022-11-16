import { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUserFromAPI } from '../components/shared/const'
import { Loading } from '@nextui-org/react'
import UserSpaceHome from '../components/userSpace/pages/home/home'

const UserHome: FunctionComponent<{}> = ({}) => {
  const [user, setUser] = useState()

  const getUser = async () => {
    const data = await getUserFromAPI()

    if (data.user) {
      setUser(data.user)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return <UserSpaceHome user={user} />
}
export default UserHome
