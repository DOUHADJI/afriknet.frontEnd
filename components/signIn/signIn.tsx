import {
  Button,
  Checkbox,
  Grid,
  Input,
  Modal,
  Row,
  Text,
} from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import {
  BsFillFileLockFill,
  BsGithub,
  BsPersonFill,
  BsFillArrowRightCircleFill,
  BsLinkedin,
} from 'react-icons/bs'
import { appTitle } from '../const'
import { getProviders, signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

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
  console.log(getProviders())
  const route = useRouter()

  const logUser = () => {
    route.push('/api/auth/signin')
    signIn()
  }
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
        />

        <Input
          clearable
          bordered
          fullWidth
          color="default"
          size="lg"
          placeholder="Password"
          contentLeft={<BsFillFileLockFill />}
          aria-label="pass input"
        />

        <Button auto color="success" onPress={logUser} type={null}>
          Se connecter
        </Button>

        <div>
          <hr />
        </div>

        <Button
          type={null}
          className="bg-zinc-900 mt-12"
          size={'xl'}
          onClick={() => signIn('github', { callbackUrl: '/userHome' })}
        >
          <div className="flex items-center  text-md">
            <span className="mx-3 text-[1.3rem]">
              <BsGithub />
            </span>
            <p className="text-extrabold text-[1rem]">Sign In with Github</p>
          </div>
        </Button>
      </Modal.Body>
    </Modal>
  )
}
export default SignInPage
