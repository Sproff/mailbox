import type { Metadata } from "next"
import { Suspense } from "react"

import { monaSans } from "@mbl-ui/theme/font"

import "./global.css"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "MailBox App",
  description: "MailBox App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={monaSans.className}>
        <Providers>
          <main>
            <Suspense>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  )
}
