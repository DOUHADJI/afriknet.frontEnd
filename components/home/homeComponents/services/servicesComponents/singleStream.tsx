import { FunctionComponent } from 'react'

const SingleStream: FunctionComponent<{ bg_image: string; title: string }> = ({
  bg_image,
  title,
}) => {
  return (
    <div className={bg_image + ' ' + 'bg-center bg-cover h-[250px] w-full'}>
      <div className="grid items-end justify-end p-8 text-white font-black uppercase text-xl h-full ">
        <div className="bg-black/75 p-3 ">{title}</div>
      </div>
    </div>
  )
}

export default SingleStream
