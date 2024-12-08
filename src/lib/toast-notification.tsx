"use client"

import { Fragment, ReactNode } from "react"
import { Toaster } from "sonner"

export const ToastNotification = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Toaster
        className="backdrop-blur-md"
        toastOptions={{
          unstyled: true,
          classNames: {
            title: "text-15 font-500",
            description: "text-14 font-400",
            error:
              "flex items-center gap-1 bg-red-200 border border-red-300 text-red-400 rounded-lg p-2",
            success:
              "flex items-center gap-1 bg-green-500 border border-green-600 text-green-700 rounded-lg p-2",
          },
        }}
      />
      {children}
    </Fragment>
  )
}
