import { Button, Input, Modal, Text, Textarea } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { BsFillCursorFill, BsSignal } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { postWithAxios } from '../../shared/const/api'

const ComplaintModal: FunctionComponent<{ show: boolean; setShowModal }> = ({
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
    toast('Plainte envoyée', {
      type: 'success',
    })

  const notifyError = () =>
    toast("Oups ! Une erreur s'est produite", {
      type: 'error',
    })

  const sendComplaint = async () => {
    const complaint = {
      title: title,
      content: content,
    }
    const res = await postWithAxios('/send_complaint', complaint)

    res.errors ? null : setTitle('')
    res.errors ? null : setContent('')
    res.errors ? null : setError(null)

    res.errors ? notifyError() : notifySuccess()
    res.errors ? setError(res.errors) : null
    res.errors ? null : setShowModal(false)
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
          Formulaire d&apos;envoie d&apos;une plainte
        </Text>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Titre
            </Text>
            <Input
              placeholder="Motif de votre plainte"
              label="motif de la plainte"
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
              label="contenu de la plainte"
              onChange={getContent}
            />
            {error?.content && (
              <p className="text-red-400 -mt-3"> {error?.content}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type={null} auto color={'error'} onPress={sendComplaint}>
            <div className="flex gap-2 items-center font-bold">
              <BsSignal className="text-xl " />
              <span>Envoyer</span>
            </div>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ComplaintModal
