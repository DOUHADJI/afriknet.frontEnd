import { FunctionComponent, useState } from 'react'
import Footer from '../footer/footer'
import ComplaintModal from './userSpaceComponents/complaintModal'
import FaqMin from './userSpaceComponents/faqMin'
import UserNavbar from './userSpaceComponents/navbar/userNavbar'
import RequestModal from './userSpaceComponents/requestModal'
import UserCurrentPayedServices from './userSpaceComponents/userCurrentPayedService'
import UserSubscriptionsAndPackagesList from './userSpaceComponents/userSbcrtionsAndPckge'
import UserSpaceBanner from './userSpaceComponents/userSpaceBanner'

const UserSpaceHome: FunctionComponent<{ user }> = ({ user }) => {
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const [complaintModalOpen, setComplaintModalOpen] = useState(false)

  const handleRequestModal = () => {
    requestModalOpen == false
      ? setRequestModalOpen(true)
      : setRequestModalOpen(false)
  }
  return (
    <>
      <UserNavbar userName={user.name} userImage={user.image} />
      <UserSpaceBanner
        user={user}
        setShowRequestModal={setRequestModalOpen}
        setShowComplaintModal={setComplaintModalOpen}
      />
      <UserCurrentPayedServices />
      <UserSubscriptionsAndPackagesList />
      <FaqMin />
      <Footer />
      <RequestModal
        show={requestModalOpen}
        setShowModal={setRequestModalOpen}
      />
      <ComplaintModal show={ complaintModalOpen} setShowModal={setComplaintModalOpen} />
    </>
  )
}

export default UserSpaceHome
