import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { appTitle } from '../../../../../shared/const/const'

const HomeSection: FunctionComponent<{
  title: string
  subtitle: string
  cover_image: string
  chains: { bg_image: string; title: string }[]
  section: { title: string; url: string }
}> = ({ title, subtitle, cover_image, chains, section }) => {
  const day_part = ['AM', 'PM']
  return (
    <div className="pt-6">
      <section className="text-black/80 dark:text-gray-300">
        <p className="text-center text-4xl uppercase mb-1">{title}</p>
        <p className="text-center text-md  mb-4"> {subtitle} </p>
        <div className="flex w-full h-[350px]">
          <Image
            width={120}
            className="w-full"
            objectFit="cover"
            src={cover_image}
            alt="section cover image"
          />
        </div>
      </section>

      <section className="mt-12">
        <p className="text-center text-2xl uppercase mb-6 font-bold text-black">
          notre sélection "{title}"...
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {chains.map((item, index) => (
            <div key={index} className="">
              <Image
                src={item.bg_image}
                objectFit="cover"
                className="h-[250px]"
                alt="chain image"
              />
              <div className="p-2">
                <p className="text-gray-600 font-bold dark:text-gray-300">
                  {item.title}
                </p>
                <p className="text-gray-600/50 font-bold dark:text-gray-300/50">
                  sur Chain à{' '}
                  <span>
                    0{Math.floor(Math.random() * 10)}h00{' '}
                    {day_part[Math.floor(Math.random() * 2)]} Gmt
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center py-8">
          <button
            type={null}
            className="bg-rose-700 p-2 rounded text-white focus:bg-rose-400 "
          >
            Plus de {section.title} sur {appTitle}
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomeSection
