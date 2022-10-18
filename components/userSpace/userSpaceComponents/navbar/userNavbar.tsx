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
    <Navbar className="bg-yellow-900 dark:bg-zinc-900" color="primary">
      <Navbar.Brand>
        <Text b className="text-gray-600 dark:text-slate-400">
          {appTitle}
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcher />
        </Navbar.Item>
        <Navbar.Item>
          <div className="flex gap-2 items-center pl-5 w-fit  border-l-2">
            <Text b className="text-sm text-gray-600 dark:text-white">
              {userName}
            </Text>
            <UserMenu userImage={userImage} />
          </div>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}

export default UserNavbar
