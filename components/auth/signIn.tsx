import { Button, Checkbox, Input, Modal, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { BsFillFileLockFill, BsPersonFill } from 'react-icons/bs'
import { appTitle, getCsrfToken, postWithAxios } from '../shared/const/api'
import Link from 'next/link'

const SignInPage: FunctionComponent<{
  isBlur: boolean
  userWantSignIn: boolean
  preventClose: boolean
  closeButton: boolean
  setUserWantSignIn?
}> = ({
  userWantSignIn,
  setUserWantSignIn,
  isBlur,
  preventClose,
  closeButton,
}) => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    console.log(res)

    if (res.status === 'success') {
      router.push('/userHome')
    }
  }

  useEffect(() => {
    getCsrfToken()
  }, [])

  return (
    <Modal
      open={userWantSignIn}
      blur={isBlur}
      closeButton={closeButton}
      preventClose={preventClose}
      onClose={() => setUserWantSignIn(false)}
      /*  css={{ background: '#dcd6d6'  }} */
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

        <div className="flex justify-between ">
          <Checkbox
            title="remember  me"
            label="remember me"
            size="sm"
            name="remember_me"
          />
          <Link href={'#'}>Forgot your password ?</Link>
        </div>

        <Button auto color="success" onPress={logUser} type={null}>
          Se connecter
        </Button>

        <div className="flex justify-center ">
          <Link href={'/signUp'}>Don't have an account ? Sign Up</Link>
        </div>

        <div>
          <hr />
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default SignInPage
