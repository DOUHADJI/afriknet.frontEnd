import { Link } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode } from 'react'

import { HiOutlineHome } from 'react-icons/hi'

const NavLinkItem: FunctionComponent<{
  title: string
  href: string
  icon: ReactNode
}> = ({ title, href, icon }) => {
  const router = useRouter()
  const path = router.asPath

  return (
    <Link href={href}>
      {path === href ? (
        <div className="flex flex-col justify-center items-center">
          <div className={'text-2xl text-rose-600'}>{icon}</div>
          <p className="text-sm font-bold  text-rose-600/75">{title}</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className={'text-2xl text-gray-100'}>{icon}</div>
          <p className="text-sm font-light  text-gray-100">{title}</p>
        </div>
      )}
    </Link>
  )
}

export default NavLinkItem
