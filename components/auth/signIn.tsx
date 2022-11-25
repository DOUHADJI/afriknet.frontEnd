import { Button, Checkbox, Input, Image, Text, Link } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { BsFillFileLockFill, BsPersonFill } from 'react-icons/bs'
import { getCsrfToken, postWithAxios } from '../shared/const/api'
import { appTitle } from '../shared/const/const'

const SignInPage: FunctionComponent<{}> = ({}) => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<any>({})
  const [data, setData] = useState<any>({})

  const getEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const getPassword = (e) => {
    const name = e.target.value
    setPassword(name)
  }

  const logUser = async () => {
    const user = {
      email: email,
      password: password,
    }

    const res = await postWithAxios('/login', user)

    res.errors ? setError(res.errors) : setData(res)

    if (res.status === 'success') {
      router.push('/userHome')
    }
  }

  useEffect(() => {
    getCsrfToken()
  }, [])

  return (
    <div className="grid gradient min-h-screen sm:grid-cols-2">
      <div className="hidden sm:flex sm:flex-col justify-center gap-6 ">
        <Image alt="login image" src="images/login.svg" width={320} />
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
          Entrer dans votre espace client
        </Text>
        
        {data.error && (
          <p className="text-red-400 -mt-3"> {data.error}</p>
        )}
        <Input
          clearable
          bordered
          fullWidth
          color="default"
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
          color="default"
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



        <div className="grid sm:grid-cols-2">
          <Checkbox
            title="remember  me"
            label="Se rappeler de moi"
            size="xs"
            name="remember_me"
            className="text-xl"
          />
          <Link href={'#'}>
            <p className="text-black text-sm text-center text-lg">
              Mot de passe oublié ?
            </p>
          </Link>
        </div>

        <Button auto onPress={logUser} type={null} className="gradient">
          Se connecter
        </Button>

        <div className="flex justify-center ">
          <Link href={'/signUp'}>
            <p className="text-black text-sm text-center text-lg">
              Pas de compte ? S'inscrire
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
export default SignInPage
