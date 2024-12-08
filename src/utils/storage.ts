import { AES, enc } from "crypto-js"

export const saveToLS = (key: string, data: unknown) => {
  const ciphertext = AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_STATE_KEY || "",
  ).toString()
  localStorage.setItem(key, ciphertext)
}

export const getFromLS = (key: string) => {
  if (typeof window === "undefined") {
    return null
  }

  const initialData = localStorage.getItem(key)

  if (initialData) {
    const bytes = AES.decrypt(initialData, process.env.NEXT_PUBLIC_STATE_KEY || "")
    const decryptedData = JSON.parse(bytes.toString(enc.Utf8))
    return decryptedData
  }

  return initialData
}

export const removeFromLS = (key: string) => {
  localStorage.removeItem(key)
}

export const storage = {
  removeItem: async (name: string) => {
    localStorage.removeItem(name)
  },
  getItem: async (name: string) => {
    const encryptedString = localStorage.getItem(name)
    if (!encryptedString) return ""

    return JSON.parse(decrypt(encryptedString))
  },
  setItem: async (name: string, value: string) => {
    const encryptedString = encrypt(value)
    localStorage.setItem(name, encryptedString)
  },
}

export const encrypt = (data: unknown) => {
  const ciphertext = AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_STATE_KEY || "",
  ).toString()

  return ciphertext
}

export const decrypt = (data: string) => {
  const bytes = AES.decrypt(data, process.env.NEXT_PUBLIC_STATE_KEY || "")
  return bytes.toString(enc.Utf8)
}
