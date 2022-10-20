import { Text } from '@nextui-org/react'
import { FunctionComponent } from 'react'

const StartOfferAssertions: FunctionComponent<{}> = ({}) => {
  const assertions = [
    { text: 'CONNEXION DE TOUS LES APPAREILS DU FOYER EN SIMULTANÉ' },
    {
      text: 'STREAMING ULTRA HAUTE DEFINITION COMPATIBLE 4K SUR PLUSIEURS ÉCRANS EN SIMULTANÉ',
    },
    { text: 'ENVOI ET TÉLÉCHARGEMENT IMMÉDIATS DE FICHIERS VOLUMINEUX' },
    {
      text: 'EXPÉRIENCE OPTIMALE POUR LES JEUX VIDÉO EN LIGNE ET LA VISIO-CONFÉRENCE',
    },
    { text: "PLUS DE VITESSE QU'IL N'EN FAUT POUR TOUS VOS AUTRES USAGES" },
    { text: 'EN WIFI AVEC LA BOX NOUVELLE GÉNÉRATION 5 GHZ' },
  ]

  const rotateChild = () => {
    document.getElementById('startCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px] -rotate-6'
    document.getElementById('startOfferAssertions').hidden = false
  }
  const unrotateChild = () => {
    document.getElementById('startCard').className =
      'w-3/4 p-8 bg-white rounded-br-[80px]'
    document.getElementById('startOfferAssertions').hidden = true
  }

  return (
    <div
      id="startOfferAssertions"
      className="w-full bg-zinc-900 relative"
      hidden
    >
      <div
        className="w-full h-full absolute z-20 bg-white "
        onMouseEnter={rotateChild}
        onMouseOut={unrotateChild}
      >
        {''}
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col  gap-8 w-2/3 ">
          {assertions.map((item, index) => (
            <div key={index}>
              <Text className="text-white font-bold text-[15px]">
                {'-'} {item.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StartOfferAssertions
