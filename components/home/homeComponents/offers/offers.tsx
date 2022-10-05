import { FunctionComponent } from 'react'
import Packages from './packages/packages'
import Subscriptions from './subscriptions/subscriptions'

const Offers: FunctionComponent = () => {
  return (
    <div className="bg-transparent p-8 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Packages />
        <Subscriptions />
      </div>
    </div>
  )
}

export default Offers
