import axios from 'axios'

export const appTitle = 'Epi.net'

/* axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest' */

export const getCookieValue = (tokenName: string) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith(tokenName + '='))
    .split('=')[1]

  return token
}

/* const token = getCookieValue('XSRF-TOKEN') */

export const axiosInstance = (token?) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    params: {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
      },
    },
    timeout: 5000,
    withCredentials: true,
  })
}

export const getCsrfToken = async () => {
  try {
    axiosInstance()
      .get('/sanctum/csrf-cookie')
      .then((response) => {
        console.log(response.headers)
      })
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

export const postWithAxios = async (url: string, dataToSend: Object, token) => {
  const params = {
    headers: {
      'X-XSRF-TOKEN': token,
    },
  }

  try {
    const { data } = await axiosInstance().post(url, dataToSend, params)
    return data
  } catch (error) {
    const { data } = error.response

    return data
  }
}
