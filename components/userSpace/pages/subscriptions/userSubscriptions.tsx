import { Table, Text } from '@nextui-org/react'
import { FunctionComponent, useState, useEffect } from 'react'
import { getWithAxios } from '../../../shared/const/api'
import UserSpaceLayout from '../../userSpaceLayout'

const UserSubscriptions: FunctionComponent<{ user }> = ({ user }) => {
  const [subscriptions, setSubscriptions] = useState([])

  const tableColums = [
    { name: 'Souscrit le' },
    { name: 'Statut' },
    { name: 'Abonnement' },
    { name: 'Type' },
    { name: 'Montant' },
  ]

  const date = new Date()

  console.log(date.getDate())

  const getSubscriptions = async () => {
    const { data } = await getWithAxios('/subscriptions_history')

    if (data) {
      setSubscriptions(data)
    }
    console.log(data)
  }

  useEffect(() => {
    getSubscriptions()
  }, [])
  return (
    <UserSpaceLayout user={user}>
      <div className="w-full p-12 ">
        <div className=" rounded-[20px]  w-full  bg-white dark:bg-zinc-800  ">
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
              {subscriptions == null ? (
                <Table.Body>
                  <Table.Row>
                    <Text className="dark:text-gray-200">
                      Vous n'avez souscrit à aucun abonnement
                    </Text>
                  </Table.Row>
                </Table.Body>
              ) : (
                <Table.Body>
                  {subscriptions.map((item, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Text className="dark:text-gray-200">
                          {item.start_date}
                        </Text>{' '}
                      </Table.Cell>
                      <Table.Cell>
                        <Text className="dark:text-gray-200">
                          {item.start_date}
                        </Text>{' '}
                      </Table.Cell>
                      <Table.Cell>
                        <Text className="dark:text-gray-200">
                          {item.offer_id}
                        </Text>{' '}
                      </Table.Cell>
                      <Table.Cell>
                        <Text className="dark:text-gray-200">
                          {item.offer_id}
                        </Text>{' '}
                      </Table.Cell>
                      <Table.Cell>
                        {' '}
                        <Text className="dark:text-gray-200">
                          {item.offer_id}
                        </Text>{' '}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              )}

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
