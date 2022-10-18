import { Avatar, Card, Grid, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import MyNavbar from '../../navbar/navbar'
import Services from './services/services'

const Banner: FunctionComponent = () => {
  const affirmations = [
    {
      text: "Vivez l'internet autrement",
      image: "bg-[url('/images/aff_1.jpg')]",
    },
    {
      text: 'Une connexion de bonne qualité',
      image: "bg-[url('/images/aff_2.jpg')]",
    },
    {
      text: 'Naviguez en toute tranquilité',
      image: "bg-[url('/images/aff_3.jpg')]",
    },
  ]
  return (
    <div className="h-max -mt-[45px]">
      <div className="h-[31rem] bg-[url('/images/banner.jpg')] bg-center bg-cover">
        <div className="flex h-full items-end pl-12 pb-12 ">
          <div className="flex">
            {affirmations.map((item, index) => (
              <div
                key={index}
                className={`rounded-full h-28 w-28 ${item.image} bg-center bg-cover border  -mr-6 sm:h-40 w-40 `}
              >
                <div className="rounded-full h-28 w-28  bg-slate-800/50 flex justify-center items-center sm:h-40 w-40">
                  <Text className="text-gray-100 font-bold text-center p-5 text-md ">
                    {item.text}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Banner
