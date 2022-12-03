import SignInPage from '../components/auth/signIn'
import { FunctionComponent, useEffect } from 'react'
import { getUserFromAPI } from '../components/shared/const/api'
import { useRouter } from 'next/router'

const SignIn: FunctionComponent = () => {
  const router = useRouter()

  const getUser = async () => {
    const data = await getUserFromAPI()
    if (data.user) {
      router.push('/userHome')
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return <SignInPage />
}
export default SignIn
