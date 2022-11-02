export function StartOffer() {
  return (
    <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
      <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
        <div className="p-8 text-3xl font-bold text-center border-b-4">
          Start
        </div>
        <ul className="w-full text-center text-sm">
          <li className="border-b py-4">
            J&apos;entre dans l&apos;univers de la page
          </li>
          <li className="border-b py-4">Thing</li>
          <li className="border-b py-4">Thing</li>
        </ul>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
          50 Mb
          <span className="text-base">/ S </span>
        </div>
        <div className="flex items-center justify-center">
          <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Souscrire
          </button>
        </div>
      </div>
    </div>
  )
}
