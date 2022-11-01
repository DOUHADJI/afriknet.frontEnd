import { Avatar, Navbar, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillPersonFill, BsPerson } from 'react-icons/bs'
import { appTitle } from '../../../const'
import LangSwitcher from '../../../navbar/langSwitcher'
import MyNavbar from '../../../navbar/navbar'
import ThemeSwitcher from '../../../navbar/themeSwitcher'
import UserMenu from './userSpaceNavbarComponents/userMenu'

const UserNavbar: FunctionComponent<{ userName; userImage }> = ({
  userName,
  userImage,
}) => {
  return (
    <div className="flex justify-between px-12 py-5 w-full bg-zinc-300 dark:bg-zinc-800 ">
      <div>
        <Text b className="text-zinc-800 dark:text-white">
          {appTitle}
        </Text>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <ThemeSwitcher />
        </div>
        <div>
          <div className="flex gap-2 items-center pl-5 w-fit  xs:border-l-2">
            <Text
              b
              className="text-[0px] sm:text-[0.8rem] md:text-sm md:text-gray-600 dark:text-white"
            >
              {userName}
            </Text>
            <UserMenu userImage={userImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
