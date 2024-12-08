"use client"

import { Button } from "@mbl-ui/form/button"

const GlobalError = () => {
  return (
    <html>
      <body>
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white-100 rounded-lg shadow-xxs w-full md:w-[30rem] mx-auto p-2 text-center">
            <h2 className="font-600 text-20">Oops!</h2>
            <p className="font-400 text-14 py-4">
              Even things we love can break sometimes, please be patient as we put the pieces back
              together.
              <br />
              Let&apos;s help you find your way back home.
            </p>

            <Button size="xs" look="green" onClick={() => window.location.reload()}>
              Refresh
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
