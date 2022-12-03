import { Button } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { getOffersFromAPI } from '../../../../shared/const/api'

const UserBannerAskForSubscription: FunctionComponent = () => {
  const [offers, setOffers] = useState([])

  const getOffers = async () => {
    const result = await getOffersFromAPI()
    setOffers(result)
  }

  useEffect(() => {
    getOffers()
    console.log(offers)
  }, [])
  return (
    <div className="flex flex-wrap gap-8 justify-around py-4 ">
      {offers.map((item, index) => (
        <Button
          icon={<BsFillPlusSquareFill />}
          color={'warning'}
          flat
          auto
          type={null}
        >
          Souscrire à <span className="font-bold pl-1">{item?.name}</span>
        </Button>
      ))}
    </div>
  )
}

export default UserBannerAskForSubscription
