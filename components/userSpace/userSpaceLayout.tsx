import { FunctionComponent, ReactNode, useEffect } from 'react'
import Footer from '../footer/footer'
import UserNavbar from './userSpaceComponents/navbar/userNavbar'

const UserSpaceLayout: FunctionComponent<{ user; children: ReactNode }> = ({
  user,
  children,
}) => {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-800  ">
      <UserNavbar userName={user?.name} userImage={user?.image} />

      <div className="bg-zinc-300  dark:bg-zinc-800 pt-[40px] px-[1.5vw]  sm:px-[3vw] ">
        <div className=" px-[3vw] sm:px-[6vw] ">
          <div className="  w-full rounded-[28px] bg-gray-200  dark:bg-zinc-900 p-[4vw] md:p-[5vw] ">
            <div className="p-[1vw] rounded-[20px] bg-zinc-300 dark:bg-zinc-800  ">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-12">
        <Footer />
      </div>
    </div>
  )
}

export default UserSpaceLayout
