"use client"

import { AxiosError } from "axios"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

import { useMailStore } from "@mbl-modules/mail/store/use-mail-store"

import { LoginProps } from "@mbl-types/auth"
import { OptionProps } from "@mbl-types/form"

import { Button } from "@mbl-ui/form/button"
import { Input } from "@mbl-ui/form/input"
import { Select } from "@mbl-ui/form/select"
import { Icons } from "@mbl-ui/icons/base"

import { onError } from "@mbl-utils/error"

import { loginEmail } from "../queries/auth"
import { useAuthStore } from "../store/use-auth-store"

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedUser, setSelectedUser] = useState<OptionProps>({
    label: "",
    value: "",
  })

  const { register, handleSubmit } = useForm<LoginProps>()
  const { authData, setAuthData } = useAuthStore()
  const { setStepper } = useMailStore()

  const submitLoginForm: SubmitHandler<LoginProps> = async (payload) => {
    try {
      const updatedPayload = {
        ...payload,
        email: payload?.email || selectedUser?.label,
        password: payload?.password || selectedUser?.value,
      }

      setIsLoading(true)
      const { data } = await loginEmail(updatedPayload)

      if (data) {
        setStepper(2)
        setAuthData({
          token: data?.token,
          user: {
            ...data?.user,
          },
        })

        if (authData?.token) {
          toast.success("Login Successful")
          setIsLoading(false)
        }
      }
    } catch (error) {
      onError(error as AxiosError)
      setIsLoading(false)
    }
  }

  return (
    <div className="p-2 flex justify-center items-center h-full">
      <div className="w-[30rem] mx-auto">
        <div className="text-center text-green-300">
          <h2 className="font-600 text-24">Login to your account</h2>
          <p className="font-400 text-16">Just one step to go!</p>
        </div>

        <div className="mt-6">
          <p className="font-600 text-14 mb-1">Select a user to log in.</p>
          <Select
            {...{
              placeholder: "Select a user",
              selected: selectedUser,
              setSelected: setSelectedUser,
              options: [
                { label: "jim@test.com", value: "Passkey123" },
                { label: "samuel@test.com", value: "Passkey123" },
                { label: "paul@test.com", value: "Passkey123" },
              ],
            }}
          />
        </div>

        <hr className="flex-grow border-t border-gray-100 my-4" />

        <form onSubmit={handleSubmit(submitLoginForm)} className="text-12 mt-5 space-y-2">
          <div>
            <label className="font-600 text-14">Email</label>
            <Input
              {...{
                defaultValue: selectedUser?.label,
                datatestid: "login-email",
                placeholder: "Enter",
                type: "text",
                formHook: register("email"),
              }}
            />
          </div>

          <div>
            <label className="font-600 text-14">Password</label>
            <Input
              {...{
                defaultValue: selectedUser?.value,
                datatestid: "login-password",
                placeholder: "Enter",
                type: showPassword ? "text" : "password",
                formHook: register("password"),
                passwordIcon: showPassword ? <Icons.eye /> : <Icons.eyeSlash />,
                handleClick: () => setShowPassword((toggle) => !toggle),
              }}
            />
          </div>

          <div>
            <Button
              datatestId="login-btn"
              size="md"
              look="green"
              className="w-full"
              disabled={isLoading || !selectedUser?.label}
            >
              {isLoading ? (
                <Icons.spinner size={18} className="mx-auto" />
              ) : (
                <p className="font-600">Login</p>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
