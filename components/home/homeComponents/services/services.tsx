import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import ServiceCard from './servicesComponents/serviceCard'

const Services: FunctionComponent = () => {
  const services = [
    {
      title: 'Dans vos entreprises',
      description:
        'Profitez du wifi à haut débit et restez connectés au monde depuis votre bureau',
      imageUrl: '/images/01.jpg',
    },

    {
      title: 'Depuis chez vous ',
      description:
        'Profitez du wifi à haut débit et restez connectés au monde depuis votre bureau',
      imageUrl: '/images/02.jpg',
    },

    {
      title: 'Même en voiture',
      description:
        'Profitez du wifi à haut débit et restez connectés au monde depuis votre bureau',
      imageUrl: '/images/03.jpg',
    },
  ]

  return (
    <div className="h-1/4 bg-[url('/images/ill_7.png')] bg-cover bg-center ">
      <Text className="text-center text-gray-700 text-lg font-bold pt-5">
        Disposez de nos offres partout où vous êtes !
      </Text>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
        {services.map((item, index) => (
          <ServiceCard
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
