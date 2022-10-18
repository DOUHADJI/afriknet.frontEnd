import { Button, Card, Grid, Text } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const ProfilInformations: FunctionComponent<{ user; showUpdateForm }> = ({
  user,
  showUpdateForm,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Text b className="text-gray-500 text-center  dark:text-white">
        Informations générales sur votre pofil
      </Text>
      <Card className="mt-6 w-3/4  dark:bg-gray-900 dark:border-gray-700 p-8">
        <Card.Body>
          <Grid.Container>
            <Grid sm={6}>
              <div className="flex flex-col items-center justify-center gap-4 w-full p-8 ">
                <Image
                  src={user?.image}
                  width={140}
                  height={140}
                  className="rounded-[40px] border-2 border-gray-500 dark:border-white"
                />
                <Text b className="text-sm text-gray-500  dark:text-white">
                  {' '}
                  {user?.name}{' '}
                </Text>
              </div>
            </Grid>

            <Grid sm={6}>
              <div className="grid gap-4">
                <Text b className="text-sm text-gray-500  dark:text-white">
                  Email : {user?.email}{' '}
                </Text>
                <Text b className="text-sm text-gray-500  dark:text-white">
                  Ville :{' '}
                </Text>
                <Text b className="text-sm text-gray-500  dark:text-white">
                  Pays :{' '}
                </Text>
                <Text b className="text-sm text-gray-500  dark:text-white">
                  Addresse :{' '}
                </Text>
                <Text b className="text-sm text-gray-500  dark:text-white">
                  Contact :{' '}
                </Text>
              </div>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
      <div className="flex justify-end items-center mt-4 w-3/4">
        <Button
          auto
          flat
          type={null}
          onClick={() => showUpdateForm(true)}
          className="bg-red-500/75 text-white dark:bg-slate-900 text-gray-300"
        >
          Modifier mon profil
        </Button>
      </div>
    </div>
  )
}

export default ProfilInformations
