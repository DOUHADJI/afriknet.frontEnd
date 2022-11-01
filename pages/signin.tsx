import SignInPage from '../components/signIn/signIn'
import { FunctionComponent } from 'react'

const SignIn: FunctionComponent = () => {
  return (
    <SignInPage
      isBlur={false}
      userWantSignIn={true}
      preventClose={true}
      closeButton={true}
    />
  )
}

export default SignIn
