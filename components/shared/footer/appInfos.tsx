import { Image, Link } from '@nextui-org/react'
import { BsHddNetwork } from 'react-icons/bs'
import { appTitle } from '../const'

const AppInfos = () => {
  return (
    <div className="py-12 dark:bg-gray-800">
      <div className="flex flex-col items-center -ml-12 ">
        <BsHddNetwork className="text-5xl" />
        <p className="text-center underline font-bold text-3xl -mt-2 ml-12 dark:text-gray-200">
          {appTitle}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link
          href="https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/"
          target={'_blank'}
          className="text-center  font-light text-xs -mt-2 w-full dark:text-gray-200"
        >
          powered by Amevi Gregoire DOUHADJI
        </Link>
      </div>
      <p className="text-center font-light text-xs mt-1 dark:text-gray-200">
        2022 . All Rights Reserved
      </p>
    </div>
  )
}
export default AppInfos
