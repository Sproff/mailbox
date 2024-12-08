import {
  PopoverButton as PopoverButtonContainer,
  Popover as PopoverContainer,
  PopoverPanel as PopoverPanelContainer,
} from "@headlessui/react"
import { ReactNode } from "react"

export type PopoverPanelProps = {
  anchor: {
    gap: number
    to: "top" | "right" | "bottom" | "left" | "top start" | "bottom end"
    offset: number
  }
  children: ReactNode
  className?: string
}

export const Popover = ({ children }: { children: ReactNode }) => {
  return <PopoverContainer className="relative">{children}</PopoverContainer>
}

export const PopoverButton = ({ children }: { children: ReactNode }) => {
  return <PopoverButtonContainer className="outline-none w-full">{children}</PopoverButtonContainer>
}

export const PopoverPanel = ({ anchor, children, className }: PopoverPanelProps) => {
  return (
    <PopoverPanelContainer
      anchor={anchor}
      className={`${className} transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0`}
      transition
    >
      {children}
    </PopoverPanelContainer>
  )
}
