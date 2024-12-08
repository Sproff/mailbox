import { ReactNode } from "react"

import { ToastNotification } from "@mbl-lib/toast-notification"

const Providers = ({ children }: { children: ReactNode }) => {
  return <ToastNotification>{children}</ToastNotification>
}

export default Providers
