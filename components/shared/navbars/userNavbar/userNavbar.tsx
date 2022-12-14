import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { appTitle } from '../../const/const'
import ThemeSwitcher from '../../themeSwitcher'
import UserMenu from './components/userMenu'

const UserNavbar: FunctionComponent<{ userName; userImage }> = ({
  userName,
  userImage,
}) => {
  return (
    <div className="flex justify-between px-12 py-5 w-full gap-8 ">
      <div className=" p-1">
        <p className="w-full text-3xl font-bold text-gray-400 dark:text-white md:absolute text-center left-0">
          {appTitle}
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <ThemeSwitcher />
        </div>
        <div>
          <div className="flex gap-2 items-center pl-5 w-fit  xs:border-l-2">
            <Text
              b
              className="text-[0px] sm:text-[0.8rem] md:text-sm md:text-slate-500 dark:text-white"
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
