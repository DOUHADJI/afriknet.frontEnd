import { FunctionComponent, useState, useEffect } from 'react'
import { WaveTopSvg } from '../waveSvg'
import { Installation } from './offersComponents/installation/Installation'
import { BsPhone, BsWifi } from 'react-icons/bs'
import OfferCard from './offersComponents/offerCard'
import { GrSatellite } from 'react-icons/gr'
import PromoOffer from './offersComponents/PromoOffer'
import { getOffersFromAPI } from '../../../shared/const/api'

const Offers: FunctionComponent = () => {
  const [offers, setOffers] = useState([])

  const getOffers = async () => {
    const result = await getOffersFromAPI()
    setOffers(result)
  }

  const offers_description = [
    {
      type: 'Internet',
      offer_name: 'Easy Surfing',
      icons: [<BsWifi key={'01'} />],
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
      icons: [<GrSatellite key={'02'} />],
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
      icons: [<BsWifi key={'03'} />, <GrSatellite key={'04'} />],
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
      icons: [
        <BsWifi key={'05'} />,
        <GrSatellite key={'06'} />,
        <BsPhone key={'07'} />,
      ],
      advantages: [
        "Jusqu'à 1000 Mbps",

        '250+ chaînes',
        'Routeur WiFi et TV Box',
        'Téléphoner',
      ],
      price: '40000',
    },
  ]

  useEffect(() => {
    getOffers()
  }, [])
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
            {offers_description.map((item, index) => (
              <OfferCard
                key={index}
                type={offers[index]?.type}
                offer_name={offers[index]?.name}
                icons={item.icons}
                advantages={item.advantages}
                price={offers[index]?.price}
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
