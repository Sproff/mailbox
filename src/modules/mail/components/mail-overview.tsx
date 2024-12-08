import { useAuthStore } from "@mbl-modules/auth/store/use-auth-store"

import { Avatar } from "@mbl-ui/avatar"
import { Button } from "@mbl-ui/form/button"
import { Icons } from "@mbl-ui/icons/base"
import { Popover, PopoverButton, PopoverPanel } from "@mbl-ui/popover"

import { LS_KEYS } from "@mbl-utils/constant"
import { truncateString } from "@mbl-utils/text"

import { useMailStore } from "../store/use-mail-store"
import { ListContent } from "./list-content"
import { ListView } from "./list-view"

export const MailOverview = () => {
  const { authData } = useAuthStore()
  const { isReadEmail, singleMailData } = useMailStore()

  const handleLogout = () => {
    LS_KEYS.forEach((key) => localStorage.removeItem(key))
    window.location.reload()
  }

  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <div className="w-full lg:w-[20%] flex flex-row lg:flex-col justify-between items-center border-r border-gray-100 py-2 p-1">
        <p className="text-24 font-900 text-green-300 rounded-lg p-1 w-full">MailBox</p>

        <div className="w-max lg:w-full">
          <div className="w-full">
            <Popover>
              <PopoverButton>
                <div className="flex gap-1 bg-white-100 shadow-sm rounded-lg p-1">
                  <Avatar name={`${authData?.user?.name}`} />

                  <div className="text-left">
                    <h3 className="text-14 font-700">{truncateString(authData?.user?.name)}</h3>
                    <p className="font-500 text-14 text-gray-200">{`${truncateString(authData?.user?.email)}`}</p>
                  </div>
                </div>
              </PopoverButton>

              <PopoverPanel
                anchor={{
                  gap: 8,
                  to: "top start",
                  offset: 0,
                }}
                className="bg-white-100 p-2 shadow-xxs rounded-lg h-max w-[18rem]"
              >
                <div>
                  <div>
                    <h4 className="font-500 text-14 text-dark-200">{`${authData?.user?.name}`}</h4>
                    <p className="font-500 text-14 text-gray-200">{`${authData?.user?.email}`}</p>
                  </div>

                  <hr className="my-2 border-gray-100" />

                  <Button onClick={handleLogout} size="xs" look="green" className="w-full">
                    <div className="flex items-center justify-center gap-1">
                      <Icons.logOut className="text-gray-100" />
                      <p className="text-white-100">Logout</p>
                    </div>
                  </Button>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        <div className="p-1.5 w-full lg:w-[55%]">
          <ListView />
        </div>

        <div className="p-1.5 w-[100%]">
          {singleMailData ? (
            <ListContent />
          ) : !isReadEmail ? (
            <div className="flex flex-col justify-center items-center h-full">
              <Icons.ghost size={80} />
              <p>Nothing to see here.</p>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="my-2">Loading message...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
