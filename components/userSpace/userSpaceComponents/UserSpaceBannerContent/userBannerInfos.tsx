import { Button, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsCursorFill, BsSignal } from 'react-icons/bs'

const UserBannerContent: FunctionComponent<{
  user
  setShowRequestModal
  setShowComplaintModal
}> = ({ user, setShowRequestModal, setShowComplaintModal }) => {
  const userInformations = {
    name: 'userName',
    firstName: 'firstName',
    city: 'userCity',
    country: 'userCountry',
    email: 'UserEmail',
    contact: 'UserContact',
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 bg-green-700/50 h-full p-12">
      <div className="flex flex-col items-center justify-center gap-12 h-full ">
        <Text b color="white" size={17} className="text-center">
          <span className="uppercase">
            code d&apos;identification client :{' '}
          </span>
          <span> {user.code ? user.code : 'userCode here'} </span>
        </Text>

        <div className="flex flex-wrap justify-around gap-6">
          <Button
            icon={<BsCursorFill />}
            color={'secondary'}
            auto
            size={'lg'}
            type={null}
            onPress={() => setShowRequestModal(true)}
          >
            Formuler une requête
          </Button>

          <Button
            icon={<BsSignal />}
            color={'error'}
            auto
            size={'lg'}
            type={null}
            onPress={() => setShowComplaintModal(true)}
          >
            Formuler une plainte
          </Button>
        </div>
      </div>

      <div className="flex flex-col  justify-center gap-3 h-full ">
        <Text color="white" size={13}>
          <span className="uppercase">NOM : </span>
          <span> {user.name} </span>
        </Text>

        <Text color="white" size={13}>
          <span className="uppercase">PAYS : </span>
          <span> UserName </span>
        </Text>
        <Text color="white" size={13}>
          <span className="uppercase">VILLE : </span>
          <span> UserName </span>
        </Text>
        <Text color="white" size={13}>
          <span className="uppercase">CONTACT : </span>
          <span> UserName </span>
        </Text>
        <Text color="white" size={13}>
          <span className="uppercase">EMAIL : </span>
          <span> {user.email} </span>
        </Text>
      </div>
    </div>
  )
}

export default UserBannerContent
