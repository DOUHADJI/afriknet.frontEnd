import { FunctionComponent } from 'react'
import { BsDisplay, BsGridFill, BsHeartFill } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'
import NavLinkItem from './navLinkItem'

const FooterNav: FunctionComponent = () => {
  const Links = [
    {
      title: 'accueil',
      href: '/userHome',
      icon: <HiOutlineHome key={'01'} />,
    },

    {
      title: 'en direct',
      href: '#',
      icon: <BsDisplay key={'01'} />,
    },

    {
      title: 'chaines',
      href: '#',
      icon: <BsGridFill key={'01'} />,
    },

    {
      title: 'vos favoris',
      href: '#',
      icon: <BsHeartFill key={'01'} />,
    },
  ]
  return (
    <div className="fixed bottom-0 w-full z-30">
      <div className="flex justify-around bg-gray-400 h-[200px w-full] py-4 px-6 dark:bg-[#3e3e3e]">
        {Links.map((item, index) => (
          <NavLinkItem
            key={index}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default FooterNav
