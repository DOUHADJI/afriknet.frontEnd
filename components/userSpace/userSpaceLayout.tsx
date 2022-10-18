import { FunctionComponent, ReactNode } from 'react'
import Footer from '../footer/footer'
import UserNavbar from './userSpaceComponents/navbar/userNavbar'

const UserSpaceLayout: FunctionComponent<{ user; children: ReactNode }> = ({
  user,
  children,
}) => {
  return (
    <div className=" min-h-screen flex flex-col place-content-between">
      <UserNavbar userName={user?.name} userImage={user?.image} />
      <div className=" h-full">{children}</div>
      <Footer />
    </div>
  )
}

export default UserSpaceLayout
