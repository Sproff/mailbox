import { formatDate } from "date-fns"

import { Avatar } from "@mbl-ui/avatar"
import { monaSans } from "@mbl-ui/theme/font"

import { useMailStore } from "../store/use-mail-store"

export const ListContent = () => {
  const { singleMailData } = useMailStore()

  return (
    <div>
      <div className="px-1 py-2 mb-0.5">
        <span className="bg-brown-100 py-0.5 my-3 px-2 rounded-lg text-12 text-white-100">
          Important
        </span>
      </div>

      <hr className="border-gray-100" />

      <div className="p-1 h-[38vh] lg:h-full overflow-auto">
        <h2 className="font-600 text-24 text-dark-200">{singleMailData?.subject}</h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Avatar name={singleMailData?.senderName as string} />

            <h2 className={`${monaSans.className} font-600 text-15 text-dark-200`}>
              {singleMailData?.senderName}
            </h2>
          </div>

          <h5 className="text-gray-200 text-14 mt-2 md:mt-0">
            {formatDate(
              new Date(singleMailData?.createdAt as string),
              "EEEE, do MMMM yyyy, hh:mmaaa",
            )}
          </h5>
        </div>

        <p className="font-300 text-16 text-gray-200 mt-4 leading-[2.2rem]">
          {singleMailData?.content}
        </p>
      </div>
    </div>
  )
}
