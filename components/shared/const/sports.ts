export const sports = [
  {
    title: 'PSG vs FC NANTES.',
    bg_image: '/images/ligue_1.jpg',
  },

  {
    title: 'LYON vs MONACO',
    bg_image: '/images/bundesliga.jpeg',
  },

  {
    title: 'shadow and bone.',
    bg_image: '/images/ligue_1.jpg',
  },

  {
    title: 'Once upon a time..',
    bg_image: '/images/bundesliga.jpeg',
  },
  {
    title: 'shadow and bone.',
    bg_image: '/images/ligue_1.jpg',
  },

  {
    title: 'Once upon a time..',
    bg_image: '/images/bundesliga.jpeg',
  },
  {
    title: 'shadow and bone.',
    bg_image: '/images/ligue_1.jpg',
  },

  {
    title: 'Once upon a time..',
    bg_image: '/images/bundesliga.jpeg',
  },
]

export const getSports = () => {
  const data = fetch(
    'https://apiv2.allsportsapi.com/football/?action=GET&met=Fixtures&APIkey=01055cb3e884c32b5b087e63016e26e77baca6abf7dfe116ed0135fe8ec0752c&from=2022-05-18&to=2022-11-18',
  ).then((response) => {
    response.json()
  })
  return data
}
