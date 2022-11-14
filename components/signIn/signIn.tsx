import { Button, Checkbox, Input, Modal, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { BsFillFileLockFill, BsGithub, BsPersonFill } from 'react-icons/bs'
import { appTitle } from '../const'
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
  const route = useRouter()

  const logUser = () => {}
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

        <Input.Password
          clearable
          bordered
          fullWidth
          color="default"
          size="lg"
          placeholder="Password"
          contentLeft={<BsFillFileLockFill />}
          aria-label="pass input"
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

        {/*   <Button
          type={null}
          className="bg-zinc-900 mt-12"
          size={'xl'}
          onClick={logUser}
        >
          <div className="flex items-center  text-md">
            <span className="mx-3 text-[1.3rem]">
              <BsGithub />
            </span>
            <p className="text-extrabold text-[1rem]">Sign In with Github</p>
          </div>
        </Button> */}
      </Modal.Body>
    </Modal>
  )
}
export default SignInPage
