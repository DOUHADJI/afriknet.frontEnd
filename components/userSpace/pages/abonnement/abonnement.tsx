import { FunctionComponent, useState } from 'react'
import { appTitle } from '../../../shared/const/const'
import ComplaintModal from '../../components/complaintModal'
import RequestModal from '../../components/requestModal'
import UserSpaceLayout from '../../userSpaceLayout'
import UserBannerAskForSubscription from './components/UserBannerAskForSubscription'
import UserBannerContent from './components/userBannerContent'

const UserSpaceAbonnement: FunctionComponent<{
  user
}> = ({ user }) => {
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [showComplaintModal, setShowComplaintModal] = useState(false)

  return (
    <UserSpaceLayout user={user}>
      <div className="flex flex-col items-center py-[3vw] sm:p-[1vw]  ">
        <div className="flex items-center justify-center py-4 w-11/12  rounded-[20px] bg-gray-400  dark:bg-zinc-700">
          <p className="text-center text-sm font-bold ">
            Bienvenue dans votre espace client {appTitle}
          </p>
        </div>

        <div className="mt-4 p-8 w-11/12 h-full ">
          <UserBannerContent
            user={user}
            setShowRequestModal={setShowRequestModal}
            setShowComplaintModal={setShowComplaintModal}
          />
          <UserBannerAskForSubscription />

          <RequestModal
            show={showRequestModal}
            setShowModal={setShowRequestModal}
          />
          <ComplaintModal
            show={showComplaintModal}
            setShowModal={setShowComplaintModal}
          />
        </div>
      </div>
    </UserSpaceLayout>
  )
}

export default UserSpaceAbonnement
