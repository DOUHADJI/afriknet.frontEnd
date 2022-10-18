import FaqPage from '../components/userSpace/userSpaceComponents/faqPage'
import UserSpaceLayout from '../components/userSpace/userSpaceLayout'
import { FunctionComponent } from 'react'
import { useSession } from 'next-auth/react'

const Faq: FunctionComponent = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <UserSpaceLayout user={user}>
      <FaqPage />
    </UserSpaceLayout>
  )
}

export default Faq
