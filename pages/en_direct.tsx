import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import FooterNav from '../components/userSpace/components/footerNav'

const EnDirect: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 h-screen w-full bg-gradient-to-tr from-slate-900 to-rose-900">
      <Image src="/under_construction.svg" width={520} alt="soon" />
      <p className="mt-3 text-3xl">En construction...</p>
      <FooterNav />
    </div>
  )
}
export default EnDirect
