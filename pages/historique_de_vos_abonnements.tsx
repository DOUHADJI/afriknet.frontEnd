import { useRouter } from 'next/router'
import { FunctionComponent, useState, useEffect } from 'react'
import { getUserFromAPI } from '../components/shared/const/api'
import UserSubscriptions from '../components/userSpace/pages/subscriptions/userSubscriptions'

const UserAbonnementsHistory: FunctionComponent = () => {
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

  return <UserSubscriptions user={user} />
}

export default UserAbonnementsHistory
