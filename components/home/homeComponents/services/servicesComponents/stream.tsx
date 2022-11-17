import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import SingleStream from './singleStream'

const Stream: FunctionComponent = () => {
  const streams = [
    {
      title: 'champions league...',
      bg_image: "bg-[url('/images/ucl.jpg')]",
    },

    {
      title: 'Stream TV...',
      bg_image: "bg-[url('/images/netflix.png')]",
    },

    {
      title: 'Netflix...',
      bg_image: "bg-[url('/images/netflix.jpeg')]",
    },

    {
      title: 'Tour de france...',
      bg_image: "bg-[url('/images/tour_de_france.jpg')]",
    },

    {
      title: 'disney plus...',
      bg_image: "bg-[url('/images/disney.webp')]",
    },

    {
      title: 'moto gp...',
      bg_image: "bg-[url('/images/moto_gp.jpg')]",
    },
  ]
  return (
    <section className="gradient border-b pt-8">
      <div className="  flex flex-wrap pt-4">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white ">
          En streaming...
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-64 opacity-25 mt-0 mb-3 py-0 rounded-t"></div>
        </div>

        <div className="grid grid-cols-1 w-full md:grid-cols-3">
          {streams.map((item, index) => (
            <SingleStream
              key={index}
              bg_image={item.bg_image}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="pt-[50px] ">
        <Image
          className="h-[350px] -mb-[150px]"
          alt=" image"
          src="/images/sofa.png"
        />
      </div>
    </section>
  )
}

export default Stream
