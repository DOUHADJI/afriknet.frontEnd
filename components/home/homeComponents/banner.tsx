import Image from 'next/image'
import { FunctionComponent } from 'react'
import { BannerSvg } from './banner/bannerSvg'

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
    <div>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/*  <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase leading-normal text-2xl mb-8 tracking-loose w-full ">
              On augmente la vitesse de nos offres !!! 
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Vivez l&apos;internet autrement...
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Naviguez en toute tranquilité
            </p>
            
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <Image
              className="w-full md:w-4/5 z-50"
              width={420}
              height={350}
              alt="banner image"
              src="/images/banner_2.svg"
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
      <BannerSvg/>
      </div>
    </div>
  )
}

export default Banner
