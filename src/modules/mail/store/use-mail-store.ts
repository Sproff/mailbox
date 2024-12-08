import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { CustomStateStorage } from "@mbl-lib/zustand"

import { TMailData } from "@mbl-types/mail"

type TStore = {
  mailData: TMailData[] | null
  setMailData: (mailData: TMailData[] | null) => void

  singleMailData: TMailData | null
  setSingleMailData: (mailData: TMailData | null) => void

  stepper: number | null
  setStepper: (stepper: number | null) => void

  isReadEmail: boolean
  setIsReadEmail: (isReadEmail: boolean) => void

  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

export const useMailStore = create<TStore>()(
  devtools(
    persist(
      (set) => ({
        mailData: null,
        setMailData: (mailData) => set({ mailData }),

        singleMailData: null,
        setSingleMailData: (singleMailData) => set({ singleMailData }),

        stepper: 1,
        setStepper: (stepper) => set({ stepper }),

        isReadEmail: false,
        setIsReadEmail: (isReadEmail) => set({ isReadEmail }),

        searchQuery: "",
        setSearchQuery: (searchQuery) => set({ searchQuery }),
      }),

      {
        name: "mbl:mail",
        storage: CustomStateStorage,
      },
    ),
  ),
)
