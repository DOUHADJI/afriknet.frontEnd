import { FunctionComponent } from 'react'
import { appTitle } from '../../const'
import UserBannerAskForService from './UserSpaceBannerContent/UserBannerAskForService'
import UserBannerInfos from './UserSpaceBannerContent/userBannerInfos'

const UserSpaceBanner: FunctionComponent<{
  user
  setShowRequestModal
  setShowComplaintModal
}> = ({ user, setShowRequestModal, setShowComplaintModal }) => {
  return (
    <div className="flex flex-col items-center  bg-[url('/images/aff_2.jpg')] bg-center bg-cover bg-fixed pb-[40px] ">
      <div className="flex items-center justify-center h-12 w-11/12 bg-gray-500 dark:bg-slate-800">
        <p className="text-center text-sm font-bold  ">
          Bienvenue dans votre espace client {appTitle}
        </p>
      </div>

      <div className="mt-4 p-8 w-11/12 h-fit ">
        <UserBannerInfos
          user={user}
          setShowRequestModal={setShowRequestModal}
          setShowComplaintModal={setShowComplaintModal}
        />
        <UserBannerAskForService />
      </div>
    </div>
  )
}

export default UserSpaceBanner
