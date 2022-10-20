import { Badge, Button, Card, Col, Row, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import StartOfferAssertions from './startOfferAssertions'

const PackageCard: FunctionComponent<{}> = ({}) => {
  return (
    <div id="startCard" className=" w-3/4 p-8 bg-white rounded-br-[80px]">
      <Text className="font-extrabold text-center  mt-4  text-zinc-800 text-[2rem] italic uppercase">
        Offre
      </Text>
      <Text className="font-extrabold text-center text-green-500 mt-4 text-[3rem] italic uppercase">
        Start
      </Text>
      <Text className="font-bold text-center text-green-500 mt-12 text-[15px] italic  ">
        J’entre dans l’univers de la fibre
      </Text>
      <Text className="font-bold text-center text-green-500  text-[15px] italic  ">
        50 Mb/s en illimité
      </Text>
      <div className="flex justify-center  gap-3 mt-16">
        <Text className="font-extrabold text-center text-zinc-800 text-[2rem] italic   ">
          A
        </Text>
        <div className="flex items-end  ">
          <Text className="font-bold text-center text-zinc-800 text-[4rem]">
            15 000
            <span className="font-extrabold text-center text-zinc-800 text-[1rem] italic  ">
              FCFA / mois
            </span>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default PackageCard
