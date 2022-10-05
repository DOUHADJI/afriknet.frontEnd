import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import SubscriptionCard from './subscriptionComponents/subscriptionCard'

const Subscriptions: FunctionComponent = () => {
  const subscriptions = [
    {
        name: 'Smart',
        debit: '25',
        price: 12500,
        isNew: false,
    },

    {
      name: 'Leonora',
      debit: '50',
      price: 15000,
      isNew: false,
    },

    {
        name: 'Blaze',
        debit: '100',
        price: 30000,
        isNew: true,
      },
  ]

  return (
    <div className="shadow border bg-black/25 rounded-[12px]">
      <Text className="font-bold text-center text-white mt-4">Nos abonnements</Text>
      <div className="grid grid-cols-2 p-8 gap-8">
        {subscriptions.map((item, index) => (
          <SubscriptionCard
            key={index}
            name={item.name}
            debit={item.debit}
            price={item.price}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  )
}

export default Subscriptions
