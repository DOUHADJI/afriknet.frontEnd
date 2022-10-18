import { Button, Navbar, Text, Link } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { appTitle } from '../const'
import LangSwitcher from './langSwitcher'
import ThemeSwitcher from './themeSwitcher'

const MyNavbar: FunctionComponent<{ setUserWantSignIn; setUserWantSignUp }> = ({
  setUserWantSignIn,
  setUserWantSignUp,
}) => {
  const links = [
    { title: 'Nos offres', href: '#' },
    { title: 'Qui sommes nous ?', href: '#' },
  ]

  return (
    <Navbar
      isBordered
      variant="floating"
      className="bg-red-900 dark:bg-slate-900"
    >
      <Navbar.Brand>
        <Text className="font-bold text-slate-500 dark:text-slate-900">
          {' '}
          {appTitle}{' '}
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        variant="highlight-rounded"
        activeColor={'warning'}
      >
        {links.map((item, index) => (
          <Navbar.Link key={index} href={item.href}>
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcher />
        </Navbar.Item>
        <Navbar.Item>
          <LangSwitcher />
        </Navbar.Item>
        <Navbar.Link>
          <Button auto flat onClick={() => setUserWantSignIn(true)} type={null}>
            Login
          </Button>
        </Navbar.Link>
        <Navbar.Item>
          <Button
            flat
            auto
            color={'warning'}
            onClick={() => setUserWantSignUp(true)}
            type={null}
          >
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}

export default MyNavbar
