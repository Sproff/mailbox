"use client"

import { AxiosError } from "axios"
import React, { Fragment, useEffect } from "react"

import { LoginForm } from "@mbl-modules/auth/components/login"
import { useAuthStore } from "@mbl-modules/auth/store/use-auth-store"

import { TUser } from "@mbl-types/auth"
import { TMailData } from "@mbl-types/mail"

import { Button } from "@mbl-ui/form/button"

import { onError } from "@mbl-utils/error"

import { useDebounce } from "../hooks/useDebounce"
import { getAllMails } from "../queries/mail"
import { useMailStore } from "../store/use-mail-store"
import { MailOverview } from "./mail-overview"

export const WelcomeOverview = () => {
  const { authData } = useAuthStore()
  const { stepper, setStepper, mailData, setMailData, searchQuery } = useMailStore()
  const timedValue = useDebounce(searchQuery, 200)
  const token = authData.token

  const fetchAllMails = async (value?: string) => {
    try {
      const { data } = await getAllMails(value)

      if (data) {
        setMailData(data?.mails)
      }
    } catch (error) {
      onError(error as AxiosError)
    }
  }

  useEffect(() => {
    if (stepper === 2 && token && !mailData) {
      fetchAllMails()
    }
  }, [stepper, token, mailData])

  useEffect(() => {
    if (stepper === 3 && timedValue) {
      fetchAllMails(timedValue)
    }
  }, [timedValue])

  return (
    <div className="flex justify-center items-center bg-white-200 h-screen">
      <div className="bg-white-100 shadow-sm border border-gray-100 rounded-lg overflow-hidden h-full lg:h-[75vh] w-[70rem]">
        {stepper === 1 && !token ? (
          <LoginForm />
        ) : stepper == 2 ? (
          <Fragment>
            <WelcomeScreen {...{ userData: authData?.user, mailData, setStepper }} />
          </Fragment>
        ) : (
          <MailOverview />
        )}
      </div>
    </div>
  )
}

const WelcomeScreen = ({
  userData,
  mailData,
  setStepper,
}: {
  userData: TUser
  mailData: TMailData[] | null
  setStepper: (stepper: number | null) => void
}) => {
  const countUnreadMessages = mailData?.filter((mail) => !mail.isRead).length

  return (
    <div className="p-2 flex justify-center items-center h-full">
      <div className="w-[30rem] mx-auto text-center text-18">
        <h1>
          Hello, <b>{userData?.name} &#128075;</b>
        </h1>
        <p className="my-2">
          You have <b className="text-green-300">{countUnreadMessages ?? 0}</b> unread messages out
          of a total of <b className="text-green-300">{mailData?.length ?? 0}.</b>
        </p>

        <Button onClick={() => setStepper(3)} size="md" look="green" className="w-max">
          View Messages
        </Button>
      </div>
    </div>
  )
}
