"use client"

import axios, { AxiosError } from "axios"

import { onError } from "@mbl-utils/error"
import { getFromLS } from "@mbl-utils/storage"

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

AxiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window !== undefined) {
      const res = getFromLS("mbl:auth")
      const token = res?.state?.authData?.token

      config.headers["authorization"] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return onError(error as AxiosError)
  },
)
