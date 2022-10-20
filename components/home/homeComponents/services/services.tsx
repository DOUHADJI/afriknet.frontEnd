import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import ServiceCard from './servicesComponents/serviceCard'

const Services: FunctionComponent = () => {
  const services = [
    {
      title: 'Dans vos entreprises',
      description:
        'Profitez du wifi à haut débit et restez connectés au monde depuis votre bureau',
      imageUrl: '/images/services-bg.jpg',
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
    <div className="h-full bg-white ">
      <div className="flex items-center justify-center ">
        <Text className="text-center text-black text-[30px] font-bold pt-5 w-2/3  dark:text-white">
          Vivez une nouvelle expérience avec la fibre
        </Text>
      </div>

      <div className="flex items-center justify-center w-full p-12">
        <div className="grid grid-cols-1 gap-6 w-4/5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
