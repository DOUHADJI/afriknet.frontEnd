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
    <div className="flex flex-wrap justify-center gap-12 rounded-[20px] bg-gray-400 dark:bg-zinc-800 h-full p-8 sm:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-12 h-full ">
        <div className="flex flex-wrap justify-around gap-6">
          <Button
            icon={<BsCursorFill />}
            auto
            color={'secondary'}
            type={null}
            onPress={() => setShowRequestModal(true)}
          >
            Formuler une requête
          </Button>

          <Button
            icon={<BsSignal />}
            color={'error'}
            auto
            type={null}
            onPress={() => setShowComplaintModal(true)}
          >
            Formuler une plainte
          </Button>
        </div>
      </div>

      <div className="flex flex-col  justify-center gap-3 h-full ">
        <Text b color="white" size={17} className="text-center">
          <span className="uppercase">
            code d&apos;identification client :{' '}
          </span>
          <span> {user.client_code ? user.client_code : 'userCode here'} </span>
        </Text>
        <div className="flex  items-center justify-center bg-gray-500  dark:bg-zinc-700 rounded-[20px]   h-32 ">
          <Text b color="white" size={14} className="text-center p-5">
            <span className="text-gray-100 dark:text-white">
              Vous n&apos;avez aucun abonnement en cours...
            </span>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default UserBannerContent
