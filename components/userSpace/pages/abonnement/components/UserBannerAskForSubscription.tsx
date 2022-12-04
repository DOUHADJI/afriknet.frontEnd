import { Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useState, useEffect } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { getOffersFromAPI, postWithAxios } from '../../../../shared/const/api'

const UserBannerAskForSubscription: FunctionComponent = () => {
  const [offers, setOffers] = useState([])

  const router = useRouter()

  const getOffers = async () => {
    const result = await getOffersFromAPI()
    setOffers(result)
  }

  const subscribeToOffer = async (id) => {
    const offerId = {
      id: id,
    }

    const { data } = await postWithAxios('/subscribe_offer', offerId)

    if (data == null) {
      toast('Vous avez déjà un abonnement en cours', {
        type: 'info',
        hideProgressBar: true,
      })
    } else {
      router.reload()
    }
  }

  useEffect(() => {
    getOffers()
  }, [])

  return (
    <div className="flex flex-wrap gap-8 justify-around py-4 ">
      {offers.map((item, index) => (
        <Button
          key={index}
          icon={<BsFillPlusSquareFill />}
          color={'warning'}
          flat
          auto
          type={null}
          onPress={() => subscribeToOffer(item.id)}
        >
          Souscrire à <span className="font-bold pl-1">{item?.id}</span>
        </Button>
      ))}
    </div>
  )
}

export default UserBannerAskForSubscription
