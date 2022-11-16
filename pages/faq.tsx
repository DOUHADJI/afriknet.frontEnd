import { FunctionComponent, useEffect, useState } from 'react'
import { getUserFromAPI } from '../components/shared/const'
import FaqPage from '../components/userSpace/pages/faq/faqPage'

const Faq: FunctionComponent = () => {
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

  return <FaqPage user={user} />
}

export default Faq
