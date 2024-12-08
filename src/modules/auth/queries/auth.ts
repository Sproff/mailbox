import { AxiosInstance } from "@mbl-lib/axios"

import { LoginProps } from "@mbl-types/auth"

export const loginEmail = async (payload: LoginProps) => {
  const { data } = await AxiosInstance.post("/auth/login", payload)
  return data
}
