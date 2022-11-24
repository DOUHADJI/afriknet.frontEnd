import { Image } from '@nextui-org/react'
import { FunctionComponent, useState } from 'react'
import { movies } from '../../../shared/const/movies'
import { getSports, sports } from '../../../shared/const/sports'
import UserSpaceLayout from '../../userSpaceLayout'
import HomeSection from './components/section/section'
import TopBar from './components/topBar'

const UserSpaceHome: FunctionComponent<{ user }> = ({ user }) => {
  console.log(getSports())
  const sections = [
    {
      title: 'tout le sport',
      subtitle:
        'Vibrez pour les plus grandes compétitions et événements sportifs',
      cover_image: '/images/UCL.jpg',
      chains: sports,
      section: {
        title: 'Sport',
        url: '#',
      },
    },

    {
      title: 'LE MEILLEUR DU CINÉMA',
      subtitle:
        'Émotion, frisson, action, comédie, aventure… Partagez de grands moments cinéma d’exception',
      cover_image: '/images/black_adam.jpg',
      chains: movies,
      section: {
        title: 'Cinema',
        url: '#',
      },
    },
  ]
  return (
    <UserSpaceLayout user={user}>
      <TopBar />
      <div className="grid gap-12">
        {sections.map((item, index) => (
          <HomeSection
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            cover_image={item.cover_image}
            chains={item.chains}
            section={item.section}
          />
        ))}
      </div>
    </UserSpaceLayout>
  )
}

export default UserSpaceHome
