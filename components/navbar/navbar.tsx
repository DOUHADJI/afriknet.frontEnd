import { Button, Navbar, Text, Link } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useState, useEffect } from 'react'
import { BsHddNetwork } from 'react-icons/bs'
import { appTitle } from '../const'
import LangSwitcher from './langSwitcher'
import ThemeSwitcher from './themeSwitcher'

const MyNavbar: FunctionComponent<{ setUserWantSignIn }> = ({
  setUserWantSignIn,
}) => {
  const links = [
    { title: 'Nos offres', href: '#' },
    { title: 'Qui sommes nous ?', href: '#' },
  ]
  const router = useRouter()

  const [csrf, setCsrf] = useState()

  const axios = require('axios')

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    /*  timeout: 1000, */
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
  })

  const getCsrf = async () => {
    const r = await http.get('/sanctum/csrf-cookie')
    setCsrf(r)
  }

  const goToSignInPage = () => {
    getCsrf()
    signIn()
  }

  /* useEffect( () => {
    getCsrf()

    console.log(csrf)
  }, []) */

  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white NavbarGradient"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <BsHddNetwork />
            {appTitle}
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#"
              >
                {''}
              </a>
            </li>
          </ul>

          <button
            id="navAction"
            className="mx-auto lg:mx-0  bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={() => setUserWantSignIn(true)}
          >
            Se connecter
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default MyNavbar
