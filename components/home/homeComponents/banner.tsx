import { Card, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import Services from './services/services'

const Banner: FunctionComponent = () => {
  return (
    <div className="h-full">
      <div className="h-96 bg-[url('/images/banner.jpg')] bg-center bg-cover">
        <div className="flex h-full items-end pl-12 pb-12 ">
          <div className="rounded bg-white/50 p-8">
            <Text className="text-white fw-light fs-2 text-uppercase opacity-100">
              Vivez l'internet autrement
            </Text>
          </div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Banner
