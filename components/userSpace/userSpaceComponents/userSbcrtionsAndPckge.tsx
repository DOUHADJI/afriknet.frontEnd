import { Table, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const UserSubscriptionsAndPackagesList: FunctionComponent = () => {
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
  const userPackages = [
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
    <div className="flex flex-col justify-center items-center w-full dark:bg-slate-800/25  ">
      <Text b size={20} className="mt-5 dark:text-white">
        Vos forfaits et abonnements
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 w-full p-8 ">
        {/* Packages Table */}
        <Table className="dark:bg-slate-900/25">
          <Table.Header>
            {tableColums.map((item, index) => (
              <Table.Column key={index}>{item.name}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            {userPackages.map((item, index) => (
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
                  <Text className="dark:text-gray-200">{item.name}</Text>{' '}
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

        {/* Subscriptions Table */}
        <Table className="dark:bg-slate-900/25">
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
                  <Text className="dark:text-gray-200">{item.name}</Text>{' '}
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
  )
}

export default UserSubscriptionsAndPackagesList
