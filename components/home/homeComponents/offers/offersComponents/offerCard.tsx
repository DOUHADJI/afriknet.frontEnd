import { Avatar, Button } from '@nextui-org/react'
import { FunctionComponent, ReactNode } from 'react'
import { BsCheck } from 'react-icons/bs'

const OfferCard: FunctionComponent<{
  type: string
  offer_name: string
  icons: ReactNode[]
  advantages: string[]
  price: string
}> = ({ type, offer_name, icons, advantages, price }) => {
  return (
    <div className="w-full ">
      <div className="grid items-center justify-center bg-slate-900 pt-12 py-6 pb-[50px] rounded-t-lg">
        <p className="font-bold text-red-600 text-center text-2xl">{type}</p>
        <p className="font-bold text-gray-200 text-4xl text-center">
          {offer_name}
        </p>
      </div>
      <div className="grid items-center justify-center w-full bg-white px-[100px] gap-12 rounded-b-lg">
        <div className="flex items-center justify-center gap-8">
          {icons.map((icon, index) => (
            <Avatar
              key={index}
              size={'xl'}
              className="text-3xl -mt-8 "
              icon={icon}
            />
          ))}
        </div>

        <div className="grid items-center justify-center bg-white pt-[40px] gap-2">
          {advantages.map((item, index) => (
            <div key={index} className="flex gap-2">
              <BsCheck className="text-3xl text-red-700" />
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center ">
          <p className=" px-1 text-2xl text-red-800 font-bold">
            {price}
            {' FCFA'}
          </p>{' '}
          <p className=" text-2xl text-red-800 font-bold px-1">| mois</p>
        </div>

        <div className="flex items-center justify-center pb-24 pt-12 ">
          <Button className="py-6 px-3 bg-red-700" type={null} size="xl">
            <p className="font-bold text-xl ">Commencer</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
