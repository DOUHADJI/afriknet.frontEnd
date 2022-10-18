import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import PackageCard from './packagesComponents/packageCard'

const Packages: FunctionComponent = () => {
  const packages = [
    {
      name: 'hebdo',
      debit: '50',
      price: 1000,
      isNew: true,
    },

    {
      name: 'Week',
      debit: '50',
      price: 5000,
      isNew: true,
    },

    {
      name: 'izi',
      debit: '100',
      price: 9000,
      isNew: true,
    },
  ]

  return (
    <div className="shadow border bg-black/25 rounded-[12px]">
      <Text className="font-bold text-center text-white mt-4">
        Nos forfaits
      </Text>
      <div className="grid grid-cols-2 p-8 gap-8">
        {packages.map((item, index) => (
          <PackageCard
            key={index}
            name={item.name}
            debit={item.debit}
            price={item.price}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  )
}

export default Packages
