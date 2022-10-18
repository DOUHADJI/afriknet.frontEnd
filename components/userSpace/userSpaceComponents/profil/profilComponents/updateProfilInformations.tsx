import { Card, Grid, Text, Button, Image, Input } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import ImgUploader from './imgUploader'

const UpdateProfilInformations: FunctionComponent<{ user; hideUpdateForm }> = ({
  user,
  hideUpdateForm,
}) => {
  const [userInformations, setUserInformations] = useState({})

  const getInputValue = (e) => {
    const value = e.target.value

    return value
  }

  const getUserInformations = () => {}

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Text b className="text-gray-500 text-center  dark:text-white">
        Mettre profil à jour{' '}
      </Text>
      <Card className="mt-6 w-3/4 p-4 dark:bg-gray-900 dark:border-gray-700 ">
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid sm={4} className="w-full">
              <ImgUploader user={user} />
            </Grid>

            <Grid sm={8} className="w-full">
              <div className="grid gap-3 w-full ">
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                  >
                    {' '}
                    Nom et prénoms
                  </Text>
                  <Input
                    placeholder={user?.name}
                    id={'name'}
                    aria-label={'Nom et prénoms'}
                    color={'primary'}
                  />
                </div>
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                  >
                    {' '}
                    Email
                  </Text>
                  <Input
                    placeholder={user ? user.email : 'johndoe@email.com'}
                    aria-label={'Email'}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      Ville
                    </Text>
                    <Input
                      placeholder={user?.name}
                      id={'name'}
                      aria-label={'Ville'}
                      color={'primary'}
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
                      placeholder={user?.name}
                      id={'name'}
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
                      placeholder={user?.name}
                      id={'name'}
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
                      placeholder={user?.name}
                      id={'name'}
                      aria-label={'contact'}
                      color={'primary'}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
      <div className="flex justify-end items-center mt-4 w-3/4 gap-4">
        <Button
          auto
          flat
          type={null}
          className="bg-red-500/75 text-white dark:bg-slate-700 text-gray-300"
          onClick={() => hideUpdateForm(false)}
        >
          Annuler
        </Button>
        <Button
          auto
          flat
          type={null}
          className="bg-green-500/75 text-white dark:bg-slate-900 text-gray-300"
        >
          Enregistrer
        </Button>
      </div>
    </div>
  )
}

export default UpdateProfilInformations
