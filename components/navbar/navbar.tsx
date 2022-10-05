import { Button, Navbar, Text, Link } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { appTitle } from '../const'
import ThemeSwitcher from './themeSwitcher'

const MyNavbar: FunctionComponent = () => {
  const links = [
    { title: 'Nos offres', href: '#' },
    { title: 'Qui sommes nous ?', href: '#' },
  ]
  return (
    <Navbar isBordered variant="sticky" className="bg-white dark:bg-gray-800">
      <Navbar.Brand>
        <Text className="font-bold text-slate-600 dark:text-white">
          {' '}
          {appTitle}{' '}
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
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
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}

export default MyNavbar
