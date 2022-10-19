import { FunctionComponent } from 'react'
import Packages from './packages/packages'
import Subscriptions from './subscriptions/subscriptions'

const Offers: FunctionComponent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 min-h-screen">
        <Packages />
        <Subscriptions />
      </div>
    </div>
  )
}

export default Offers
