import { Table, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import UserSpaceLayout from '../../userSpaceLayout'

const UserSubscriptions: FunctionComponent<{ user }> = ({ user }) => {
  const tableColums = [
    { name: 'Payé le' },
    { name: 'Moyen de payement' },
    { name: 'Dénomination' },
    { name: 'Montant' },
  ]

  const userSubscriptions = [
    {
      name: 'Hebdo',
      date: '2021-12-15',
      by: 'Mobile',
      price: '5000',
    },
    {
      name: 'Hebdo',
      date: '2021-12-15',
      by: 'Mobile',
      price: '5000',
    },
    {
      name: 'Hebdo',
      date: '2021-12-15',
      by: 'Mobile',
      price: '5000',
    },
  ]

  return (
    <UserSpaceLayout user={user}>
      <div className="w-full ">
        <div className=" rounded-[20px]  w-full  bg-transparent dark:bg-zinc-800  ">
          <div className=" flex justify-center w-full">
            <Text
              b
              size={20}
              className="mt-5 text-center text-gray-700 dark:text-white "
            >
              Historique de vos abonnements
            </Text>
          </div>
          <div className="px-8 py-3 ">
            {/* Subscriptions Table */}
            <Table className="dark:bg-zinc-900/25">
              <Table.Header>
                {tableColums.map((item, index) => (
                  <Table.Column key={index}>{item.name}</Table.Column>
                ))}
              </Table.Header>
              <Table.Body>
                {userSubscriptions.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Text className="dark:text-gray-200">{item.date}</Text>{' '}
                    </Table.Cell>
                    <Table.Cell>
                      <Text className="dark:text-gray-200">{item.by}</Text>{' '}
                    </Table.Cell>
                    <Table.Cell>
                      <Text className="dark:text-gray-200">{item.price}</Text>{' '}
                    </Table.Cell>
                    <Table.Cell>
                      {' '}
                      <Text className="dark:text-gray-200">
                        {item.name}
                      </Text>{' '}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={3}
                onPageChange={(page) => console.log({ page })}
              />
            </Table>
          </div>
        </div>
      </div>
    </UserSpaceLayout>
  )
}

export default UserSubscriptions
