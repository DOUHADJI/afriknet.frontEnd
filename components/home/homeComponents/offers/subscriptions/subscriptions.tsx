import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import SubscriptionCard from './subscriptionComponents/subscriptionCard'

const Subscriptions: FunctionComponent = () => {
  const rotateChild = () => {
    document.getElementById('premiumCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px] -rotate-6'
  }
  const unrotateChild = () => {
    document.getElementById('premiumCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px]'
  }

  return (
    <div className="bg-purple-900 py-12 ">
      <div className="flex items-center justify-center w-full h-full relative">
        <div
          className="w-full h-full absolute z-20 "
          onMouseEnter={rotateChild}
          onMouseOut={unrotateChild}
        >
          {''}
        </div>
        <SubscriptionCard />
      </div>
    </div>
  )
}

export default Subscriptions
