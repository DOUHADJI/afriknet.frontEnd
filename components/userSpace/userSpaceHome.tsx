import { FunctionComponent } from 'react'
import Footer from '../footer/footer'
import FaqMin from './userSpaceComponents/faqMin'
import UserNavbar from './userSpaceComponents/navbar/userNavbar'
import UserCurrentPayedServices from './userSpaceComponents/userCurrentPayedService'
import UserSubscriptionsAndPackagesList from './userSpaceComponents/userSbcrtionsAndPckge'
import UserSpaceBanner from './userSpaceComponents/userSpaceBanner'

const UserSpaceHome: FunctionComponent<{ user }> = ({ user }) => {
  return (
    <>
      <UserNavbar userName={user.name} userImage={user.image} />
      <UserSpaceBanner user={user} />
      <UserCurrentPayedServices />
      <UserSubscriptionsAndPackagesList />
      <FaqMin />
      <Footer />
    </>
  )
}

export default UserSpaceHome
