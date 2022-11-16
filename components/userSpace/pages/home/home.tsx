import { FunctionComponent, useState } from 'react'
import UserSpaceBanner from '../../components/banner/banner'
import ComplaintModal from '../../components/complaintModal'
import RequestModal from '../../components/requestModal'
import UserSpaceLayout from '../../userSpaceLayout'

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
