import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import Packages from './packages/packages'
import StartOfferAssertions from './packages/packagesComponents/startOfferAssertions'
import Subscriptions from './subscriptions/subscriptions'
import Image from 'next/image'
import { WaveTopSvg } from '../waveSvg'
import { Installation } from './offersComponents/Installation'
import { StartOffer } from './offersComponents/start'
import { StandardOffer } from './offersComponents/standard'
import { PremiumOffer } from './offersComponents/premium'

const Offers: FunctionComponent = () => {
  return (
    <div>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Nos offres
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <StartOffer />

            <StandardOffer />

            <PremiumOffer />
          </div>
        </div>
      </section>

      <WaveTopSvg />

      <Installation />
    </div>
  )
}

export default Offers
