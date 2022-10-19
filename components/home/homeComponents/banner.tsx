import { Avatar, Card, Grid, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import MyNavbar from '../../navbar/navbar'
import Services from './services/services'

const Banner: FunctionComponent = () => {
  const affirmations = [
    {
      text: "Vivez l'internet autrement",
      bgColor: 'bg-yellow-500',
    },
    {
      text: 'Une connexion de bonne qualité',
      bgColor: 'bg-blue-700',
    },
    {
      text: 'Naviguez en toute tranquilité',
      bgColor: 'bg-green-700',
    },
  ]
  return (
    <div className=" -mt-[45px]">
      <div className="h-screen bg-[url('/images/banner-bg-2.jpg')] bg-center bg-cover">
        <div className="flex h-full items-end pl-12 pb-12 ">
          <div className="flex">
            {/*  {affirmations.map((item, index) => (
              <div
                key={index}
                className={`rounded-full h-28 w-28  border  -mr-6 sm:h-40 w-40 ${item.bgColor} `}
              >
                <div className="rounded-full h-28 w-28  bg-slate-800/50 flex justify-center items-center sm:h-40 w-40">
                  <Text className="text-gray-100 font-bold text-center p-5 text-md ">
                    {item.text}
                  </Text>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
