import { Button } from '@nextui-org/react'

export function Eligibility() {
  return (
    <section className="py-6 mb-12 mt-12">
      <p className="w-full my-2 text-2xl font-bold leading-tight text-center text-white">
        Tester votre éligibilité
      </p>

      <div className="flex items-center w-full">
        <input
          className="px-12 py-5 text-2xl w-full font-bold text-gray-900 rounded-lg bg-gray-200 focus: outline-none "
          placeholder="Rue 079 Agoè, Lomé Togo"
        />
        <Button
          className="bg-red-900 h-full py-2 px-18 rounded -ml-[50px] rounded-[0px] rounded-r-[10px] caret-slate-900"
          animated={false}
          size={'xl'}
        >
          Tester maintenant
        </Button>
      </div>

      <div></div>
    </section>
  )
}
