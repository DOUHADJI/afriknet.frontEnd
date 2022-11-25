import { Grid, Text, Button, Input } from '@nextui-org/react'
import Router, { useRouter } from 'next/router'
import { FunctionComponent, useState, useEffect } from 'react'
import { postWithAxios } from '../../../../shared/const/api'
import ImgUploader from './imgUploader'

const UpdateProfilInformations: FunctionComponent<{ user; hideUpdateForm }> = ({
  user,
  hideUpdateForm,
}) => {
  const [userInformations, setUserInformations] = useState(user)

  const router = useRouter()

  const getName = (e) => {
    const name = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      name: name,
    }))
  }

  const getEmail = (e) => {
    const email = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      email: email,
    }))
  }

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
      hideUpdateForm(false)
      router.reload()
    }
    console.log(res.status)
  }

  return (
    <div className="w-screen ">
      <div className="flex  items-center justify-center ">
        <Text b className="text-gray-500 text-center  dark:text-white">
          Mettre votre profil à jour{' '}
        </Text>
      </div>

      <div className="mt-6 w-full rounded-[20px]  p-4 bg-gray-200 dark:bg-zinc-900 dark:border-gray-700 ">
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
                    placeholder={user?.name}
                    onChange={getName}
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
                    onChange={getEmail}
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
            auto
            type={null}
            className="bg-red-600 text-white dark:bg-red-800 text-gray-300"
            onClick={() => hideUpdateForm(false)}
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
      </div>
    </div>
  )
}

export default UpdateProfilInformations
