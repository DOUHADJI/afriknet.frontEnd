import { FunctionComponent } from 'react'
import { WaveTopSvg } from '../waveSvg'
import { Installation } from './offersComponents/installation/Installation'
import { BsPhone, BsWifi } from 'react-icons/bs'
import OfferCard from './offersComponents/offerCard'
import { GrSatellite } from 'react-icons/gr'
import PromoOffer from './offersComponents/PromoOffer'

const Offers: FunctionComponent = () => {
  const offers = [
    {
      type: 'Internet',
      offer_name: 'Easy Surfing',
      icons: [<BsWifi />],
      advantages: [
        "Jusqu'à 50 Mbps",
        'Turbo-vitesse de navigation',
        'Routeur Wi-Fi',
        ' Appareils illimités',
      ],
      price: '15000',
    },

    {
      type: 'Tv',
      offer_name: 'Impression',
      icons: [<GrSatellite />],
      advantages: [
        ' 200+ chaînes',
        '5 chaînes premium',
        'Box TV',
        'Chambres illimitées',
      ],
      price: '10000',
    },

    {
      type: 'Internet + TV',
      offer_name: 'Home Comfort',
      icons: [<BsWifi />, <GrSatellite />],
      advantages: [
        " Jusqu'à 100 Mbps",

        '200+ chaînes',
        'Routeur Wi-Fi',
        'Appareils illimités',
      ],
      price: '25000',
    },

    {
      type: 'Internet + TV + Phone',
      offer_name: 'Epi Premium ',
      icons: [<BsWifi />, <GrSatellite/>, <BsPhone />],
      advantages: [
       "Jusqu'à 1000 Mbps",

"250+ chaînes",
"Routeur WiFi et TV Box",
"Téléphoner"
      ],
      price: '40000',
    },
  ]
  return (
    <div>
      <section className="bg-gray-100  pt-[150px]">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Nos offres tarifaires
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:flex-row justify-center pt-12 my-12 sm:my-4 md:grid-cols-2">
            {offers.map((item, index) => (
              <OfferCard
                type={item.type}
                offer_name={item.offer_name}
                icons={item.icons}
                advantages={item.advantages}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <PromoOffer />
      </section>

      <WaveTopSvg />

      <Installation />

    </div>
  )
}

export default Offers
