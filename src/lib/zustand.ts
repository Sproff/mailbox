import { getFromLS, removeFromLS, saveToLS } from "@mbl-utils/storage"

export const CustomStateStorage = {
  getItem: async (key: string) => {
    const data = getFromLS(key)
    return data
  },
  setItem: (key: string, value: any) => {
    saveToLS(key, value)
  },
  removeItem: (key: string) => {
    removeFromLS(key)
  },
}
