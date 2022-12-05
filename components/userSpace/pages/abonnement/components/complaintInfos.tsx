import { Badge } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { appTelNumber } from '../../../../shared/const/const'

const ComplaintInfos: FunctionComponent<{ complaint }> = ({ complaint }) => {
  return (
    <div className="">
      {complaint ? (
        <div className="grid gap-2 w-full  bg-gray-500  dark:bg-zinc-700 rounded p-4 relative ">
          <p className="text-gray-100 text-md font-bold text-center p-5 w-full dark:text-white">
            Votre plainte en cours ...
          </p>

          <p className="text-gray-100 text-lg font-medium w-full dark:text-white">
            Id de la plainte :{' '}
            <span className="text-orange-200 font-bold"> {complaint?.id}</span>
          </p>

          <p className="text-gray-100 text-lg font-medium w-full dark:text-white">
            Motif :{' '}
            <span className="text-orange-200 text-md ">
              {' '}
              {complaint?.motif}
            </span>
          </p>

          <div className="flex gap-2 absolute -top-4 right-4 ">
            {/* <p className='font-bold'>Status : </p>  */}
            <Badge 
            color={
                complaint?.statut == "resolved" ?
                'success' :
                'warning'
                }>status : {complaint?.statut} </Badge>
          </div>
        </div>
      ) : (
        <div className=" bg-rose-800/75 rounded p-6  ">
          <div className="text-gray-100 text-sm font-bold text-center  dark:text-white">
            En cas de souci,
            <br />
            veuillez nous envoyer une plainte
            <br />
            ou contacter notre service
            <br />
            client au {appTelNumber}
          </div>
        </div>
      )}
    </div>
  )
}

export default ComplaintInfos
