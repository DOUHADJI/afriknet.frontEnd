import UserSpaceAbonnement from '../components/userSpace/pages/abonnement/abonnement'
import { FunctionComponent, useState, useEffect } from 'react'
import {  getUserFromAPI } from '../components/shared/const/api'

const CurrenSubscription: FunctionComponent = () => {
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

  return <UserSpaceAbonnement user={user} />
}
export default CurrenSubscription
