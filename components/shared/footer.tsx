import { Badge, Link, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const CreateBy: FunctionComponent = () => {
  return (
    <div className=" pt-8 px-4 pb-6">
      <div className="flex"></div>
      <div>
        <Text className="text-white text-xs font-light text-center ">
          created by
        </Text>
        <Text className="text-white text-sm font-light text-center ">
          - AMEVI GREGOIRE DOUHADJI -
        </Text>
      </div>
      <div className="flex justify-center mt-4 gap-5">
        <Link
          color={'primary'}
          href="https://github.com/DOUHADJI"
          target={'_blank'}
        >
          <BsGithub width={140} />
        </Link>

        <Link
          color={'primary'}
          href="https://www.linkedin.com/in/amevi-gregoire-douhadji-5b43281ab/"
          target={'_blank'}
        >
          <BsLinkedin width={140} />
        </Link>
      </div>
      <div className="mt-4">
        <Text className="text-white text-xs font-light text-center ">
          - all rights reserved -
        </Text>
      </div>
    </div>
  )
}

export default CreateBy
