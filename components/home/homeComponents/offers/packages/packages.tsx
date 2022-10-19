import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import PackageCard from './packagesComponents/packageCard'

const Packages: FunctionComponent = () => {
  const rotateChild = () => {
    document.getElementById('startCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px] -rotate-6'
  }
  const unrotateChild = () => {
    document.getElementById('startCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px]'
  }

  return (
    <div className="bg-zinc-900 py-12 ">
      <div className="flex items-center justify-center w-full h-full relative">
        <div
          className="w-full h-full absolute z-20 "
          onMouseEnter={rotateChild}
          onMouseOut={unrotateChild}
        >
          {''}
        </div>
        <PackageCard />
      </div>
    </div>
  )
}

export default Packages
