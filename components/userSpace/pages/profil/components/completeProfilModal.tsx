import { Button, Grid, Input, Modal, Text } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { useRouter } from 'next/router'
import { postWithAxios } from '../../../../shared/const/api'
import ImgUploader from './imgUploader'

const CompleteProfilModal: FunctionComponent<{ user }> = ({ user }) => {
  const [open, setOpen] = useState(true)
  const [userInformations, setUserInformations] = useState(user)
  const router = useRouter()

  const getCity = (e) => {
    const city = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      city: city,
    }))
  }

  const getCountry = (e) => {
    const country = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      country: country,
    }))
  }

  const getAddress = (e) => {
    const address = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      address: address,
    }))
  }

  const getContact = (e) => {
    const contact = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      contact: contact,
    }))
  }

  const updateUserInformations = async () => {
    const res = await postWithAxios('/update', userInformations)

    if (res.status === 'success') {
      router.reload()
    }
  }

  return (
    <Modal open={open} preventClose className="mx-5">
      <Modal.Header>Complétez les informations de votre profil...</Modal.Header>
      <Modal.Body className="p-12">
        <div>
          <Grid.Container gap={2}>
            <Grid sm={12} className="w-full">
              <ImgUploader user={user} />
            </Grid>

            <Grid sm={12} className="w-full">
              <div className="grid gap-3 w-full ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      Ville
                    </Text>
                    <Input
                      placeholder={user?.city}
                      aria-label={'Ville'}
                      color={'primary'}
                      onChange={getCity}
                    />
                  </div>
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      Pays
                    </Text>
                    <Input
                      placeholder={user?.country}
                      onChange={getCountry}
                      aria-label={'Pays'}
                      color={'primary'}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      {' '}
                      Addresse de domicile
                    </Text>
                    <Input
                      placeholder={user?.address}
                      onChange={getAddress}
                      aria-label={'Addresse de domicile'}
                      color={'primary'}
                    />
                  </div>
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      {' '}
                      Contact{' '}
                    </Text>
                    <Input
                      placeholder={user?.contact}
                      onChange={getContact}
                      aria-label={'contact'}
                      color={'primary'}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid.Container>
        </div>
        <div className="flex justify-end items-center mt-4 w-full gap-4">
          <Button
            disabled
            auto
            type={null}
            className="bg-red-600 text-white dark:bg-red-800 text-gray-300"
            onClick={() => setOpen(false)}
          >
            <p className="text-white">retour</p>
          </Button>
          <Button
            auto
            flat
            type={null}
            className="bg-green-500 text-white dark:bg-green-700 text-gray-300"
            onPress={updateUserInformations}
          >
            <p className="text-white">Enregistrer</p>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default CompleteProfilModal
