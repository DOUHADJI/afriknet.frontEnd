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
import { BsFillFileLockFill, BsPersonFill } from 'react-icons/bs'
import { appTitle } from '../const'
import { signIn } from 'next-auth/react'

const SignInPage: FunctionComponent<{
  isBlur: boolean
  userWantSignIn: boolean
  preventClose: boolean
  closeButton: boolean
  setUserWantSignIn
}> = ({
  userWantSignIn,
  setUserWantSignIn,
  isBlur,
  preventClose,
  closeButton,
}) => {
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
      css={{ background: '#968f41' }}
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
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto color="success" onPress={logUser} type={null}>
          Se connecter
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignInPage
