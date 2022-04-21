import { api } from '@src/Services/Api' // Your file with config axios
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import React from 'react'

export const ApiInterceptor: React.FC = () => {
  api.request.interceptors.response.use(
    (response: AxiosResponse) => response,
    (axiosError: AxiosError) => {
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          // Remove token and send user to home
          return {
            status: 401,
            data: {},
          }
        }
        throw axiosError
      }
      if (axiosError.request) {
        throw axiosError
      }
      throw axiosError
    },
  )

  return (<></>)
}
