import { Button } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const UserBannerAskForService: FunctionComponent = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-around py-4 ">
      <Button
        icon={<BsFillPlusSquareFill />}
        color={'warning'}
        flat
        auto
        type={null}
      >
        Souscrire à l&apos;offre Start
      </Button>

      <Button
        icon={<BsFillPlusSquareFill />}
        color={'warning'}
        flat
        auto
        type={null}
      >
        Souscrire à l&apos;offre Standard
      </Button>

      <Button
        icon={<BsFillPlusSquareFill />}
        color={'warning'}
        flat
        auto
        type={null}
      >
        Souscrire à l&apos;offre Premium
      </Button>
    </div>
  )
}

export default UserBannerAskForService
