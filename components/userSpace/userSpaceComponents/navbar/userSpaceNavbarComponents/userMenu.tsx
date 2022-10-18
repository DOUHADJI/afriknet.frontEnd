import { Dropdown, Avatar, Text, Grid, Button } from '@nextui-org/react'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { signOut } from 'next-auth/react'
import {
  BsArrowLeft,
  BsFillHouseFill,
  BsFillPersonFill,
  BsQuestionCircleFill,
} from 'react-icons/bs'
import { userAgent } from 'next/server'

const UserMenu: FunctionComponent<{ userImage }> = ({ userImage }) => {
  const MenuItems = [
    {
      title: 'Accueil',
      link: '/userHome',
      icon: <BsFillHouseFill size={18} />,
    },

    {
      title: 'Profil',
      link: '/profil',
      icon: <BsFillPersonFill size={18} />,
    },

    {
      title: 'FAQ',
      link: '/faq',
      icon: <BsQuestionCircleFill size={18} />,
    },

    {
      title: 'Logout',
      link: '/api/auth/signout',
      icon: <BsArrowLeft size={18} />,
    },
  ]

  return (
    <Grid>
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <Avatar
            squared
            as="button"
            src={userImage ? userImage : '/images/user.webp'}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
          {MenuItems.map((item, index) => (
            <Dropdown.Item key={index} color="error" textColor="primary">
              <Link href={item.link}>
                {item.title === 'Logout' ? (
                  <Button onClick={() => signOut()}>
                    <a className="flex gap-6 text-red-500">
                      {item.icon}
                      <Text className="text-sm text-red-500 ">
                        {item.title}
                      </Text>
                    </a>
                  </Button>
                ) : (
                  <a className="flex gap-6 text-gray-500">
                    {item.icon}
                    <Text className="text-sm ">{item.title}</Text>
                  </a>
                )}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Grid>
  )
}

export default UserMenu
