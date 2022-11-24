import { Link } from '@nextui-org/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { myGithubProfilLink, myLinkedinProfilLink } from '../const/api'

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-8  text-[1.5rem] ">
      <Link href={myGithubProfilLink} target={'_blank'}>
        <FiGithub className=" text-[1.5rem] dark:text-gray-200" />
      </Link>

      <Link href={myLinkedinProfilLink} target={'_blank'}>
        <FiLinkedin className=" text-[1.5rem] dark:text-gray-200" />
      </Link>
    </div>
  )
}
export default SocialLinks
