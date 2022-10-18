import { FunctionComponent, useState } from 'react'
import ProfilInformations from './profilComponents/profilInformations'
import UpdateProfilInformations from './profilComponents/updateProfilInformations'

const UserSpaceProfil: FunctionComponent<{ user }> = ({ user }) => {
  const [visible, setVisible] = useState(false)

  const handleUpdateFormVisibility = () => {
    visible == false ? setVisible(true) : null
  }
  return (
    <div className="flex items-center align-center w-full ">
      {visible == true ? (
        <UpdateProfilInformations user={user} hideUpdateForm={setVisible} />
      ) : (
        <ProfilInformations user={user} showUpdateForm={setVisible} />
      )}
    </div>
  )
}

export default UserSpaceProfil
