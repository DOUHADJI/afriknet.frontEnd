import SignInPage from '../components/auth/signIn'

const SignIn = () => {
  return (
    <SignInPage
      userWantSignIn={true}
      setUserWantSignIn={null}
      isBlur={false}
      closeButton={true}
      preventClose={true}
    />
  )
}
export default SignIn
