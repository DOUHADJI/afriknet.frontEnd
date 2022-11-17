import { Button, Link, Navbar, Text } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { BsHddNetwork } from 'react-icons/bs'
import { appTitle } from '../../const'

const MyNavbar: FunctionComponent<{ setUserWantSignIn }> = ({
  setUserWantSignIn,
}) => {
  const links = [
    { title: 'Nos offres', href: '#' },
    { title: 'Qui sommes nous ?', href: '#' },
  ]

  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <div className="text-xl">
            <BsHddNetwork />
            <Text b>{appTitle}</Text>
          </div>
        </Navbar.Brand>
        <Navbar.Content></Navbar.Content>
        <Navbar.Content>
          <Link href="/signIn">
            <Text className="underline text-bold text-xl">Se connecter</Text>
          </Link>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default MyNavbar
