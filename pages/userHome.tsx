import { FunctionComponent, useEffect, useState } from 'react'
import { getUserFromAPI } from '../components/shared/const/api'

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
