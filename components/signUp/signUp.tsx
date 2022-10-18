import {
  Button,
  Checkbox,
  Grid,
  Input,
  Modal,
  Row,
  Text,
} from '@nextui-org/react'
import { FunctionComponent } from 'react'
import {
  BsFillFileLockFill,
  BsMailbox,
  BsMailbox2,
  BsPersonFill,
  BsVoicemail,
} from 'react-icons/bs'
import { appTitle } from '../const'

const SignUp: FunctionComponent<{
  userWantSignUp: boolean
  setUserWantSignUp
}> = ({ userWantSignUp, setUserWantSignUp }) => {
  return (
    <Modal
      open={userWantSignUp}
      closeButton
      onClose={() => setUserWantSignUp(false)}
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
          placeholder="username"
          contentLeft={<BsPersonFill />}
          css={{
            color: '#dbdad2',
            text: 'bold',
            textDecorationColor: '#dbdad2',
          }}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="default"
          size="lg"
          placeholder="email"
          contentLeft={<BsMailbox2 />}
          css={{
            color: '#dbdad2',
            text: 'bold',
            textDecorationColor: '#dbdad2',
          }}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="default"
          size="lg"
          placeholder="password"
          contentLeft={<BsFillFileLockFill />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="default"
          size="lg"
          placeholder="confirm password"
          contentLeft={<BsFillFileLockFill />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14} color="white">
              Remember me
            </Text>
          </Checkbox>
          <Text size={14} color="white">
            Forgot password?
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          flat
          auto
          color="error"
          onClick={() => setUserWantSignUp(false)}
          css={{ background: '#ef3b6e' }}
        >
          Close
        </Button>
        <Button auto color="success" onClick={() => console.log('clicked')}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default SignUp
