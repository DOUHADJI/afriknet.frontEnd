import {
  Button,
  Input,
  Modal,
  Text,
  Textarea,
  useTheme,
} from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsFillCursorFill } from 'react-icons/bs'
import { postWithAxios } from '../../shared/const/api'
import { toast } from 'react-toastify'

const RequestModal: FunctionComponent<{ show: boolean; setShowModal }> = ({
  show,
  setShowModal,
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [error, setError] = useState<any>()

  const getTitle = (e) => {
    const title = e.target.value
    setTitle(title)
  }

  const getContent = (e) => {
    const content = e.target.value
    setContent(content)
  }

  const notifySuccess = () =>
    toast('Requête envoyée', {
      type: 'success',
    })

  const notifyError = () =>
    toast("Oups ! Une erreur s'est produite", {
      type: 'error',
    })

  const sendRequest = async () => {
    const request = {
      title: title,
      content: content,
    }
    const res = await postWithAxios('/send_request', request)

    res.errors ? null : setTitle('')
    res.errors ? null : setContent('')

    res.errors ? null : setShowModal(false)
    res.errors ? notifyError() : notifySuccess()
    res.errors ? setError(res.errors) : null

    console.log(res)
  }

  return (
    <Modal
      open={show}
      closeButton
      preventClose
      onClose={() => setShowModal(false)}
      className="dark:bg-slate-800"
    >
      <Modal.Body>
        <Text b className="text-gray-500 text-md text-center dark:text-white">
          Formulaire d&apos;envoie d&apos;une requête
        </Text>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Titre
            </Text>
            <Input
              placeholder="Motif de votre requête"
              label="Motif de votre requête"
              onChange={getTitle}
            />
            {error?.title && (
              <p className="text-red-400 -mt-3"> {error?.title}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Contenu
            </Text>
            <Textarea
              placeholder="Formuler ici"
              label="Content de la requête"
              onChange={getContent}
            />
            {error?.content && (
              <p className="text-red-400 -mt-3"> {error?.content}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type={null} auto color={'secondary'} onPress={sendRequest}>
            <div className="flex gap-2 items-center font-bold">
              <BsFillCursorFill className="text-xl " />
              <span>Envoyer</span>
            </div>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RequestModal
