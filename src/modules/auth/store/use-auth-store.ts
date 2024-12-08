import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { CustomStateStorage } from "@mbl-lib/zustand"

import { TUser } from "@mbl-types/auth"

type TAuthData = {
  token: string
  user: TUser
}

type TStore = {
  authData: TAuthData
  setAuthData: (data: TAuthData) => void
}

export const useAuthStore = create<TStore>()(
  devtools(
    persist(
      (set) => ({
        authData: {
          token: "",
          user: {
            _id: "",
            id: "",
            name: "",
            email: "",
            createdAt: "",
          },
        },
        setAuthData: (authData) => set({ authData }),
      }),
      {
        name: "mbl:auth",
        storage: CustomStateStorage,
      },
    ),
  ),
)
