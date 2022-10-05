import { FunctionComponent } from 'react'
import { appTitle } from '../../const'

const MiddlePageBanner: FunctionComponent = () => {
  return (
    <div className=" h-60 bg-red-300">
      <div className=" h-full flex items-center bg-[url('/images/04.jpg')] bg-cover bg-center bg-fixed p-12">
        <div className="h-40 w-full">
          <p className=" p-1 text-center  w-full text-xl">{""}</p>
        </div>
      </div>
    </div>
  )
}
export default MiddlePageBanner
