import { Button, Dropdown, Image } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useMemo, FunctionComponent } from 'react'
import { MdRouter } from 'react-icons/md'


const PromoOffer : FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 items-center bg-white p-8 md:grid-cols-2">
     <div className='grid gap-6 py-12 md:-mr-24 z-20'>
     <div>
     <p className='text-4xl font-bold  text-slate-800 uppercase'>
        Tester notre offre TV et Internet 
        </p>

        <p className='text-2xl font-bold  text-slate-800 mt-2 uppercase'>
      
à  <span className='text-red-900'>2000 F/mois   </span> seulement !!!
        </p>
     </div>

        <p className='text-slate-900 text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eaque laboriosam libero quia possimus ea magnam quod deleniti molestias deserunt facere autem, modi officiis aliquam sit.
        </p>

        <div className='flex items-end gap-3 text-red-500'>
            <MdRouter className='text-5xl' />
            <p className='text-2xl font-bold'>
                le router wifi gratuit inclus !!!
            </p>
        </div>

        <div>
        <Button className="py-6 px-3 bg-red-700 mt-12" type={null} size="xl">
            <p className="font-bold text-xl ">Tester maintenant</p>
          </Button>
        </div>
     </div>
    <Image src='/images/promo.png' width={500} />
    </div>
  )
}
export default PromoOffer
