import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

import { buttonSizes, buttonVariants } from "@mbl-ui/form/button"

export type OptionProps = {
  value: string
  label: string
  code?: string
}

export type ButtonProps = {
  size: keyof typeof buttonSizes
  look: keyof typeof buttonVariants
  activeLook?: keyof typeof buttonVariants
  className?: string
  datatestId?: string
  onClick?: () => void
  disabled?: boolean
  title?: string
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
}

export type SelectProps = {
  selected: OptionProps
  setSelected: (item: OptionProps) => void
  options: OptionProps[]
  placeholder?: string
  formHook?: UseFormRegisterReturn
  disabled?: boolean
}

export type InputProps = {
  id?: string
  datatestid?: string
  value?: string | number
  defaultValue?: string | number
  placeholder?: string
  type: string
  min?: number
  max?: number
  passwordIcon?: React.ReactNode
  handleClick?: () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  formHook?: UseFormRegisterReturn
}
