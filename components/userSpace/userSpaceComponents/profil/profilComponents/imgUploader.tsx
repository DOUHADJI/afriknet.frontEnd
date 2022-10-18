import { Button, Input, Image } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsCameraFill } from 'react-icons/bs'

const ImgUploader: FunctionComponent<{ user }> = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState([])

  const uploadFile = () => {
    document.getElementById('fileInput').click()
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full ">
      <div className="h-[140px] w-[140px] rounded-[40px] border-2 border-gray-500 dark:border-white">
        <Image
          src={user?.image}
          width={140}
          height={140}
          alt="User Profil image"
          className="rounded-[40px] border-2 border-gray-500 dark:border-white"
        />
      </div>
      <Button type={null} auto icon={<BsCameraFill />} onPress={uploadFile}>
        add new profil...
      </Button>
      <Input
        id="fileInput"
        type={'file'}
        css={{ display: 'none' }}
        onChange={() => {}}
      />
    </div>
  )
}
export default ImgUploader
