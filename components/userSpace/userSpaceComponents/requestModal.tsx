import { Button, Input, Modal, Text, Textarea } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillCursorFill } from 'react-icons/bs'

const RequestModal: FunctionComponent<{ show: boolean; setShowModal }> = ({
  show,
  setShowModal,
}) => {
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
            <Input placeholder="Motif de votre requête" />
          </div>
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Contenu
            </Text>
            <Textarea placeholder="Formuler ici" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type={null} auto color={'secondary'}>
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
