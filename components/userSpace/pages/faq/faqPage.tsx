import { Collapse, Link, Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import UserSpaceLayout from '../../userSpaceLayout'

const FaqPage: FunctionComponent<{ user }> = ({ user }) => {
  const collaspes = [
    {
      title: 'Comment souscrire à une offre  ? ',
      description:
        'Pour souscrire à une de nos offres rendez-vous dans un de nos points de vente ou souscrivez en payant via les services mobiles Flooz ou TMoney',
    },

    {
      title: 'Comment modifier mes identifiants  ? ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique nesciunt libero a totam quo eius dolorem iure sapiente, corporis cupiditate est eveniet suscipit aspernatur! Optio nihil numquam similique aliquid. ',
    },

    {
      title: 'Comment nous faire part de vos problèmes  ? ',
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum expedita, ex quo vero magni! Alias fugiat voluptatem suscipit optio, id repellendus, quam incidunt ipsum cumque dicta impedit et atque. class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.",
    },
  ]

  return (
    <UserSpaceLayout user={user}>
      <div className="flex flex-col items-center justify-center  py-10 w-full h-full rounded-[20px]">
        <div className=" rounded-[16px] px-10 w-full h-full">
          <Collapse.Group bordered className="bg-gray-100 dark:bg-zinc-900">
            {collaspes.map((item, index) => (
              <Collapse
                key={index}
                title={
                  <Text b className="text-slate-700 dark:text-gray-200 ">
                    {item.title}
                  </Text>
                }
                className="dark:text-white"
              >
                <Text className="font-light text-slate-900 dark:text-white ">
                  {' '}
                  {item.description}{' '}
                </Text>
              </Collapse>
            ))}
          </Collapse.Group>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-6 ">
          <Text className="dark:text-white">
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </Text>
          <Text className="flex gap-2 text-blue-500 items-center">
            <BsFillTelephoneFill /> <span> ( +228 ) 22 23 00 00</span>
          </Text>
        </div>
      </div>
    </UserSpaceLayout>
  )
}

export default FaqPage
