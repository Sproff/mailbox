import { AxiosInstance } from "@mbl-lib/axios"

export const getAllMails = async (query?: string) => {
  const { data } = await AxiosInstance.get(`/mail${query ? `?q=${encodeURIComponent(query)}` : ""}`)
  return data
}
export const getSingleMail = async (mailId: string) => {
  const { data } = await AxiosInstance.get(`/mail/${mailId}`)
  return data
}
