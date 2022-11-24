import { FunctionComponent } from 'react'

const Selection: FunctionComponent<{ bg_image: string; title: string }> = ({
  bg_image,
  title,
}) => {
  return (
    <div className="h-full">
      <div
        className={
          bg_image +
          ' ' +
          'bg-center bg-cover pt-[200px] bg-white md:pt-[300px]'
        }
      >
        <div className="grid items-end justify-end  text-white font-black uppercase text-xl">
          <div className="bg-black/75 p-3">{title}</div>
        </div>
      </div>
    </div>
  )
}
export default Selection
