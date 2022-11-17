import { Loading } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import Footer from '../shared/footer'
import UserNavbar from '../shared/navbars/userNavbar/userNavbar'

const UserSpaceLayout: FunctionComponent<{ user; children: ReactNode }> = ({
  children,
  user,
}) => {
  const router = useRouter()

  const redirectToLogin = () => {
    console.log(user)
    setTimeout(() => {
      if (user === null) {
        router.push('/signIn')
      }
    }, 3000)
  }

  useEffect(() => {
    redirectToLogin()
  }, [])

  if (user) {
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
  } else {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-400">
        <Loading>Loading ...</Loading>
      </div>
    )
  }
}

export default UserSpaceLayout
