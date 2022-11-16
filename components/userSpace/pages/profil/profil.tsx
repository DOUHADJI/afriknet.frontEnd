import { FunctionComponent, useState } from 'react'
import UserSpaceLayout from '../../userSpaceLayout'
import ProfilInformations from './components/profilInformations'
import UpdateProfilInformations from './components/updateProfilInformations'

const UserSpaceProfil: FunctionComponent<{ user }> = ({ user }) => {
  const [visible, setVisible] = useState(false)

  return (
    <UserSpaceLayout user={user}>
      <div className="flex items-center align-center w-full p-[4vw]">
        {visible == true ? (
          <UpdateProfilInformations user={user} hideUpdateForm={setVisible} />
        ) : (
          <ProfilInformations user={user} showUpdateForm={setVisible} />
        )}
      </div>
    </UserSpaceLayout>
  )
}

export default UserSpaceProfil
