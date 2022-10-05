import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const ServiceCard: FunctionComponent<{
  title: string
  description: string
  imageUrl: string
}> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-transparent">
      <div className="col  p-4 m-2">
        <div className="border border-2 border-secondary p-2">
          <p className=" text-center font-semibold text-gray-800 text-sm">
            {title}
            <span className="bi bi-emoji-wink fs-5"></span>
          </p>

          <span className="fas fa-industry text-secondary fs-2"></span>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <div className="rounded-full bg-black/50">
            <Image
              className="rounded-full"
              width={320}
              height={180}
              src={imageUrl}
              alt="Default Image"
              objectFit="cover"
            />
          </div>
        </div>

        <div className=" border border-2 border-secondary p-4 mt-3">
          <p className=" text-black text-sm font-semibold  ">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
