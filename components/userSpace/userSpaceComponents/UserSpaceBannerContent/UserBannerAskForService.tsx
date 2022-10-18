import { Button } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const UserBannerAskForService: FunctionComponent = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-around bg-gray-900/75 p-3">
      <Button
        icon={<BsFillPlusSquareFill />}
        color={'warning'}
        flat
        auto
        size={'lg'}
        type={null}
      >
        Formuler une requête
      </Button>

      <Button
        icon={<BsFillPlusSquareFill />}
        color={'warning'}
        flat
        auto
        size={'lg'}
        type={null}
      >
        Formuler une requête
      </Button>
    </div>
  )
}

export default UserBannerAskForService
