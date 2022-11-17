import { Dropdown, Avatar, Text, Grid, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import {
  BsArrowLeft,
  BsFillHouseFill,
  BsFillPersonFill,
  BsQuestionCircleFill,
  BsTable,
} from 'react-icons/bs'
import { getWithAxios } from '../../../const'

const UserMenu: FunctionComponent<{ userImage }> = ({ userImage }) => {
  const router = useRouter()

  const LogOutUser = async () => {
    await getWithAxios('/logout')
    router.push('/signIn')
  }

  const MenuItems = [
    {
      title: "Page d'accueil",
      link: '/userHome',
      icon: <BsFillHouseFill size={18} />,
    },

    {
      title: 'Votre profil',
      link: '/profil',
      icon: <BsFillPersonFill size={18} />,
    },

    {
      title: 'Historique de vos abonnements',
      link: '/historique_de_vos_abonnements',
      icon: <BsTable size={18} />,
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
              {item.title === 'Logout' ? (
                <Button onPress={LogOutUser}>
                  <a className="flex gap-6 text-red-500">
                    {item.icon}
                    <Text className="text-sm text-red-500 ">{item.title}</Text>
                  </a>
                </Button>
              ) : (
                <Link href={item.link}>
                  <a className="flex gap-6 text-gray-500">
                    {item.icon}
                    <Text className="text-sm ">{item.title}</Text>
                  </a>
                </Link>
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Grid>
  )
}

export default UserMenu
