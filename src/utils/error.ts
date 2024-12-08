import { AxiosError } from "axios"
import { toast } from "sonner"

import { LS_KEYS } from "./constant"
import { removeFromLS } from "./storage"

interface ResponseData {
  message?: string
}

export const handleAxiosError = async (error: AxiosError) => {
  const { response } = error

  toast.error(response && (response.data as ResponseData)?.message)

  const handleUnauthorized = () => {
    LS_KEYS.forEach((key) => removeFromLS(key))
  }

  if (response && [401, 403].includes(response.status)) {
    handleUnauthorized()
  }
}

export const onError = (error: AxiosError) => handleAxiosError(error)
