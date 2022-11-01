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
    <div className="flex flex-col items-center py-[3vw] sm:p-[1vw]  ">
      <div className="flex items-center justify-center py-4 w-11/12  rounded-[20px] bg-gray-400  dark:bg-zinc-700">
        <p className="text-center text-sm font-bold ">
          Bienvenue dans votre espace client {appTitle}
        </p>
      </div>

      <div className="mt-4 p-8 w-11/12 h-full ">
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
