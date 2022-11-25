import { Button, Input, Image, Text, Link } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import { BsFillFileLockFill, BsPersonFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import { getCsrfToken, postWithAxios } from '../shared/const/api'
import { appTitle } from '../shared/const/const'

const SignUpPage: FunctionComponent = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [error, setError] = useState<any>({})
  const [data, setData] = useState<any>({})

  const getName = (e) => {
    const name = e.target.value
    setName(name)
  }

  const getEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const getPassword = (e) => {
    const name = e.target.value
    setPassword(name)
  }

  const getConfirmedPassword = (e) => {
    const confirmedPassword = e.target.value
    setConfirmedPassword(confirmedPassword)
  }

  const redirectTo = (url: string) => {
    router.push(url)
  }

  const registerNewUserAndRedirectOnSuccess = async () => {
    getCsrfToken()

    const user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmedPassword,
    }

    const res = await postWithAxios('/api/register', user)

    res.errors ? setError(res.errors) : setData(res)

    if (!res.errors) {
      toast(res.message)
      redirectTo('/')
    }
  }

  return (
    <div className="grid gradient min-h-screen sm:grid-cols-2">
      <div className="hidden sm:flex sm:flex-col justify-center gap-6 ">
        <Image alt="login image" src="images/welcome.svg" width={320} />
      </div>
      <div className="flex flex-col justify-center  gap-4 bg-white p-12">
        <Text
          id="modal-title"
          size={18}
          className="mb-8 text-4xl text-center font-bold "
        >
          {appTitle}
        </Text>

        <Text id="modal-title" size={18} className="mb-3 text-xl">
          Inscrivez vous ici
        </Text>

        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Nom d'utilisateur"
          contentLeft={<BsPersonFill />}
          css={{
            color: '#dbdad2',
            text: 'bold',
            textDecorationColor: '#dbdad2',
          }}
          aria-label="name input"
          onChange={getName}
          value={name}
        />

        {error.name && <p className="text-red-400 -mt-3"> {error.name}</p>}

        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Email"
          contentLeft={<BsPersonFill />}
          css={{
            color: '#dbdad2',
            text: 'bold',
            textDecorationColor: '#dbdad2',
          }}
          aria-label="email input"
          onChange={getEmail}
          value={email}
        />

        {error.email && <p className="text-red-400 -mt-3"> {error.email}</p>}

        <Input.Password
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Password"
          contentLeft={<BsFillFileLockFill />}
          aria-label="pass input"
          onChange={getPassword}
          value={password}
        />
        {error.password && (
          <p className="text-red-400 -mt-3"> {error.password}</p>
        )}
        <Input.Password
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Confirm password"
          contentLeft={<BsFillFileLockFill />}
          aria-label="pass input"
          onChange={getConfirmedPassword}
          value={confirmedPassword}
        />

        {error.password && (
          <p className="text-red-400 -mt-3"> {error.password}</p>
        )}
        <Button
          auto
          className="gradient"
          onPress={registerNewUserAndRedirectOnSuccess}
          type={null}
        >
          S'enregistrer
        </Button>

        <div className="flex justify-center ">
          <Link href="/signIn">
            <p className="text-black text-sm text-center text-lg">
              Déjà inscrit ? Se connecter
            </p>
          </Link>
        </div>

        <div>
          <hr />
        </div>
      </div>
    </div>
  )
}
export default SignUpPage
