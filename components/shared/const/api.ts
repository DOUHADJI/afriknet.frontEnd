import axios from 'axios'

export const axiosInstance = () => {
  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    params: {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
      },
    },
    timeout: 5000,
  })

  return axiosInstance
}

export const getCsrfToken = async () => {
  try {
    const { headers } = await axiosInstance().get('/sanctum/csrf-cookie')

    return headers
  } catch (err) {
    return err
  }
}

export const getWithAxios = async (url: string) => {
  let data
  try {
    data = axiosInstance()
      .get(url)
      .then((response) => {
        return response.data
      })
  } catch (err) {
    return err
  }

  return data
}

export const postWithAxios = async (url: string, dataToSend: Object) => {
  const params = {
    withCredentials: true,
  }

  console.log(axiosInstance().post(url, dataToSend, params))

  try {
    const { data } = await axiosInstance().post(url, dataToSend)
    return data
  } catch (error) {
    console.log('redind error data')
    const { data } = error.response

    return data
  }
}

export const getUserFromAPI = async () => {
  const data = await getWithAxios('/user')
  return data
}

export const getOffersFromAPI = async () => {
  const {offers} = await getWithAxios('/offers')
  return offers
}

export const getCookieValue = (tokenName: string) => {
  const token = document.cookie

  if (token !== '') {
    token
      .split('; ')
      .find((row) => row.startsWith(tokenName + '='))
      .split('=')[1]

    return token
  } else {
    return token
  }
}
