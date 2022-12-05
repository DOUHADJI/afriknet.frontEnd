import { Badge, Button, Text } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { BsCursorFill, BsSignal } from 'react-icons/bs'
import { getWithAxios } from '../../../../shared/const/api'
import ComplaintInfos from './complaintInfos'
import SubscriptionInfos from './subscriptionInfos'

const UserBannerContent: FunctionComponent<{
  user
  setShowRequestModal
  setShowComplaintModal
}> = ({ user, setShowRequestModal, setShowComplaintModal }) => {
  const [complaint, setComplaint] = useState(null)

  const getTheLastestComplaint = async () => {
    const res = await getWithAxios('/get_lastest_complaint')

    res.errors ? null : setComplaint(res.data)
  }

  useEffect(() => {
    getTheLastestComplaint()
  }, [complaint])

  return (
    <div className="flex flex-wrap-reverse justify-center items-center gap-8 rounded-[20px] bg-gray-400 dark:bg-zinc-800 h-full p-8">
      <div className="flex flex-col items-center justify-center gap-12  ">
        <ComplaintInfos complaint={complaint} />

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
            disabled={complaint?.statut != 'resolved' ? true : false}
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
        <div className=" ">
          <SubscriptionInfos />
        </div>
      </div>
    </div>
  )
}

export default UserBannerContent
