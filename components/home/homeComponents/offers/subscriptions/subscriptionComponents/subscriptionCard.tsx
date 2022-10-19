import { Badge, Button, Card, Col, Row, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const SubscriptionCard: FunctionComponent<{}> = ({}) => {
  return (
    <div id="premiumCard" className="w-3/4 p-8 bg-white rounded-br-[80px]">
      <Text className="font-extrabold text-center  mt-4 text-[2rem] italic uppercase md:">
        Offre
      </Text>
      <Text className="font-extrabold text-center text-blue-500 mt-4 text-[3rem] italic uppercase">
        premium
      </Text>
      <Text className="font-bold text-center text-blue-500 mt-12 text-[15px] italic  ">
        La puissance version fibre
      </Text>
      <Text className="font-bold text-center text-blue-500  text-[15px] italic  ">
        200 Mb/s* en illimité
      </Text>
      <div className="flex justify-center  gap-3 mt-16">
        <Text className="font-extrabold text-center text-black text-[2rem] italic  ">
          A
        </Text>
        <div className="flex items-end  ">
          <Text className="font-bold text-center text-black text-[4rem]   ">
            30 000
            <span className="font-extrabold text-center text-black  text-[1rem] italic  ">
              FCFA / mois
            </span>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCard
