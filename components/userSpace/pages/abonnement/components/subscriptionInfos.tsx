import { Badge, Loading, Text } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { getWithAxios } from '../../../../shared/const/api'

const SubscriptionInfos: FunctionComponent = () => {
  const [data, setData] = useState(null)

  const { subscription, offer } = data ? data : ({} as any)

  const getTheCurentSubscription = async () => {
    const res = await getWithAxios('/current_subscription')

    res.errors ? null : setData(res.data)
  }

  useEffect(() => {
    getTheCurentSubscription()
  }, [subscription])

  if (subscription === undefined) {
    return (
      <p className="text-2xl font-bold">
        checking <Loading type="points-opacity" color={'white'}></Loading>
      </p>
    )
  }

  return (
    <div>
      {subscription === null ? (
        <div className="flex justify-center items-center bg-gray-500  dark:bg-zinc-700 rounded-[20px] min-h-[150px] ">
          <Text
            b
            color="white"
            size={14}
            className="text-gray-100 text-center p-5 dark:text-white"
          >
            Vous n&apos;avez aucun abonnement en cours...
          </Text>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-green-600/75 rounded-[20px]  min-h-[150px] p-4">
          <div className="grid gap-4 py-4">
            <p className="text-gray-100 text-sm font-bold text-center bg-white/25 rounded-lg p-2 dark:text-white">
              Votre abonnement en cours ...
            </p>

            <p className="text-gray-100 text-md font-bold text-center w-full dark:text-white">
              Offre souscrit :{' '}
              <span className="text-orange-300">{offer.name}</span>
            </p>

            <p className="text-gray-100 text-md font-bold text-center w-full dark:text-white">
              Type d'abonnement :{' '}
              <span className="text-orange-200">{offer.type}</span>
            </p>

            <p className="text-gray-100 text-md font-bold text-center w-full dark:text-white">
              Expire le :{' '}
              <Badge color={'warning'}>{subscription.expiration_date}</Badge>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubscriptionInfos
