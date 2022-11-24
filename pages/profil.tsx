import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { getUserFromAPI } from '../components/shared/const/api'
import UserSpaceProfil from '../components/userSpace/pages/profil/profil'

const Profil: FunctionComponent<{}> = ({}) => {
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

  return <UserSpaceProfil user={user} />
}

export default Profil
