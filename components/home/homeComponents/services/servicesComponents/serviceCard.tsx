import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const ServiceCard: FunctionComponent<{
  title: string
  description: string
  imageUrl: string
}> = ({ title, description, imageUrl }) => {
  return (
    <div className="h-64 bg-[url('/images/services-bg.jpg')] bg-center bg-cover">
      <div className="flex flex-col items-start justify-end h-full p-4 pb-10 m-2">
        <div className="border border-2 border-black  p-2 dark:border-white">
          <p className=" text-center font-semibold text-black text-sm dark:text-white">
            {title}
            <span className="bi bi-emoji-wink fs-5"></span>
          </p>
        </div>

        <div className=" border border-2 border-black p-4 mt-3 dark:border-white">
          <p className=" text-black text-sm font-semibold dark:text-white  ">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
