import { FunctionComponent, useState } from 'react'
import Footer from '../footer/footer'
import ComplaintModal from './userSpaceComponents/complaintModal'
import FaqMin from './userSpaceComponents/faqMin'
import UserNavbar from './userSpaceComponents/navbar/userNavbar'
import RequestModal from './userSpaceComponents/requestModal'
import UserCurrentPayedServices from './userSpaceComponents/userCurrentPayedService'
import UserSubscriptionsAndPackagesList from './userSpaceComponents/userSbcrtionsAndPckge'
import UserSpaceBanner from './userSpaceComponents/userSpaceBanner'
import UserSpaceLayout from './userSpaceLayout'

const UserSpaceHome: FunctionComponent<{ user }> = ({ user }) => {
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const [complaintModalOpen, setComplaintModalOpen] = useState(false)

  return (
    <UserSpaceLayout user={user}>
      <UserSpaceBanner
        user={user}
        setShowRequestModal={setRequestModalOpen}
        setShowComplaintModal={setComplaintModalOpen}
      />
      <RequestModal
        show={requestModalOpen}
        setShowModal={setRequestModalOpen}
      />
      <ComplaintModal
        show={complaintModalOpen}
        setShowModal={setComplaintModalOpen}
      />
    </UserSpaceLayout>
  )
}

export default UserSpaceHome
