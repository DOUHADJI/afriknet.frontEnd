import { Button, Grid, Input, Modal, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import { BsFillFileLockFill, BsPersonFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import {
  appTitle,
  getCookieValue,
  getCsrfToken,
  postWithAxios,
} from '../shared/const'

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
    res.errors ? console.log(res.errors) : console.log(res)

    if (!res.errors) {
      toast(res.message)
      redirectTo('/')
    }
  }

  return (
    <Modal
      open={true}
      closeButton
      onClose={() => redirectTo('/')}
      className="SignInBackground"
    >
      <Modal.Header>
        <Text id="modal-title" size={18} color={'#FFFFFF'}>
          Welcome to{' '}
          <Text b size={18} color={'#FFFFFF'}>
            {appTitle}
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-title" size={18} color={'#FFFFFF'}>
          Sign In with email
        </Text>

        <ToastContainer />

        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          helperColor={error.name ? 'error' : null}
          helperText={error.name ? error.name : null}
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

        <Button
          auto
          color="success"
          onPress={registerNewUserAndRedirectOnSuccess}
          type={null}
        >
          S'enregistrer
        </Button>

        <div>
          <hr />
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default SignUpPage