import { Grid, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const UserCurrentPayedServices: FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center p-10 bg-gradient-to-tr  from-red-200/75 to-yellow-100 dark:bg-gradient-to-bl  dark:from-slate-800 to-white">
      <div className="grid grid-cols-1 gap-12 items-center justify-center w-9/12  ">
        <div className="flex items-center justify-center bg-gray-600/75 h-32 dark:bg-slate-800 ">
          <Text b color="white" className="p-4 text-center">
            Vous n&apos;avez aucun forfait en cours ...{' '}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default UserCurrentPayedServices
