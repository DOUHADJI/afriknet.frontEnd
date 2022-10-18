import { Button, Input, Modal, Text, Textarea } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillCursorFill, BsSignal } from 'react-icons/bs'

const ComplaintModal: FunctionComponent<{ show: boolean; setShowModal }> = ({
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
          Formulaire d'envoie d'une plainte
        </Text>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Titre
            </Text>
            <Input placeholder="Motif de votre plainte" />
          </div>
          <div className="grid gap-2">
            <Text b className="text-gray-500 text-md dark:text-white">
              Contenu
            </Text>
            <Textarea placeholder="Formuler ici" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type={null} auto color={'error'}>
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
