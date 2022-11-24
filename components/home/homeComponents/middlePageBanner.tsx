import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { appTitle } from '../../shared/const/api'

const MiddlePageBanner: FunctionComponent = () => {
  return (
    <div className=" h-80">
      <div className=" h-full flex items-center bg-[url('/images/04.jpg')] bg-cover bg-center bg-fixed ">
        <div className="h-full p-12 w-full bg-gradient-to-tr from-slate-900 to-yellow-700/75">
          <div>
            <Text className="text-start text-pink-700 text-[1.3rem] font-extrabold pt-4  w-2/3 sm:text-[2.5rem] ">
              Avec {appTitle} ,
            </Text>
            <Text className="text-start text-white text-[1rem] font-bold  w-2/3 sm:text-[2rem]">
              Vivez une nouvelle expérience de la fibre !!!
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MiddlePageBanner
