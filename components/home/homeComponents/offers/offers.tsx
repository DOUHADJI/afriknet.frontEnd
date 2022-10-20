import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import Packages from './packages/packages'
import StartOfferAssertions from './packages/packagesComponents/startOfferAssertions'
import Subscriptions from './subscriptions/subscriptions'
import Image from 'next/image'

const Offers: FunctionComponent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 min-h-screen">
        <Packages />
        <Subscriptions />
      </div>

      <div className="flex  justify-center items-center bg-white py-12">
        <Text className="text-[5rem] font-extrabold p-8">+</Text>
        <div className="w-fit">
          <div className="flex flex-col justify-around items-center h-full border border-[10px] border-black p-8 ">
            <Text className="font-extrabold text-[3rem] text-center">
              <div>LA BOX</div>
              <div>FIBRE</div>
            </Text>
            <Image
              src="/images/router.jpg"
              width={120}
              height={120}
              alt="router image"
            />
            <Text className="font-extrabold italic text-[20px] text-center">
              <div>LA BOX ET L&apos;INSTALLATION </div>
              <div>À 10 000 FCFA SEULEMENT !!! </div>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
