import { Loading } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect } from 'react'
import { getUserFromAPI } from '../shared/const/api'
import UserNavbar from '../shared/navbars/userNavbar/userNavbar'
import FooterNav from './components/footerNav'

const UserSpaceLayout: FunctionComponent<{ user; children: ReactNode }> = ({
  children,
  user,
}) => {
  const router = useRouter()

  const redirectToLogin = async () => {
    try {
      const data = await getUserFromAPI()
    } catch (error) {
      router.push('/signIn')
    }
  }

  useEffect(() => {
    redirectToLogin()
  }, [])

  if (user) {
    return (
      <div className="bg-white dark:bg-black">
        <UserNavbar userImage={user?.image} userName={user?.name} />
        <div className="mb-[70px]  z-50">{children}</div>

        <FooterNav />
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
