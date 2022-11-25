import { FunctionComponent } from 'react'
import { Grid, Text, Button, Input } from '@nextui-org/react'
import ImgUploader from './imgUploader'

const ProfilInformations: FunctionComponent<{ user; showUpdateForm }> = ({
  user,
  showUpdateForm,
}) => {
  return (
    <div className="w-full ">
      <div className="flex  items-center justify-center ">
        <Text b className="text-gray-500 text-center  dark:text-white">
          Informations sur votre profil
        </Text>
      </div>

      <div className="mt-6 w-full rounded-[20px]  p-4 bg-gray-200 dark:bg-zinc-800 dark:border-gray-700 ">
        <div className="flex justify-end items-center mt-4 w-full gap-4">
          <Button
            auto
            type={null}
            className="bg-red-600 dark:bg-red-900 text-gray-300"
            onClick={() => showUpdateForm(true)}
          >
            <p className="text-slate-100 dark:text-white">
              Modifier mes informations
            </p>
          </Button>
        </div>
        <div>
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
                    readOnly
                    value={user?.name}
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
                    readOnly
                    value={user ? user.email : 'johndoe@email.com'}
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
                      readOnly
                      value={user?.city}
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
                      readOnly
                      value={user?.country}
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
                      readOnly
                      value={user?.address}
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
                      readOnly
                      value={user?.contact}
                      id={'name'}
                      aria-label={'contact'}
                      color={'primary'}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  )
}

export default ProfilInformations
