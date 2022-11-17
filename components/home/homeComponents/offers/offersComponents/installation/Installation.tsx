import { Eligibility } from "./eligibility";

export function Installation() {
  return (
    <section className="container mx-auto text-center py-6 mb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        LA BOX - FIBRE
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        La box et l&apos;installation à partir de 15 000 FCFA
      </h3>
     
      <Eligibility />
    </section>
  )
}
