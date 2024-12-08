import { AxiosError } from "axios"
import { Fragment, useState } from "react"

import { TMailData } from "@mbl-types/mail"

import { Avatar } from "@mbl-ui/avatar"
import { Input } from "@mbl-ui/form/input"
import { Icons } from "@mbl-ui/icons/base"
import { monaSans } from "@mbl-ui/theme/font"

import { formatDate } from "@mbl-utils/date"
import { onError } from "@mbl-utils/error"
import { truncateString } from "@mbl-utils/text"

import { getAllMails, getSingleMail } from "../queries/mail"
import { useMailStore } from "../store/use-mail-store"

export const ListView = () => {
  const [selectedMail, setSelectedMail] = useState<TMailData | null>(null)
  const { mailData, setSearchQuery } = useMailStore()

  return (
    <div className="bg-white-300 h-full rounded-lg mb-2">
      <div className="p-1">
        <Input
          {...{
            datatestid: "search-input",
            placeholder: "Search",
            type: "text",
            onChange: (e) => setSearchQuery(e.target.value),
          }}
        />
      </div>

      <hr className="border-gray-100" />

      <div className="px-1 h-[25vh] lg:h-full overflow-auto">
        {mailData && mailData?.length > 0 ? (
          <Fragment>
            {mailData?.map((mail, idx) => (
              <ListCard key={idx} {...{ mail, selectedMail, setSelectedMail }} />
            ))}
          </Fragment>
        ) : (
          <div className="flex flex-col justify-center items-center h-full -m-8">
            <Icons.ghost size={80} />
            <p>Oops, no messages.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const ListCard = ({
  mail,
  selectedMail,
  setSelectedMail,
}: {
  mail: TMailData | null
  selectedMail: TMailData | null
  setSelectedMail: (mailData: TMailData | null) => void
}) => {
  const { setIsReadEmail, setSingleMailData, setMailData } = useMailStore()

  const fetchSingleMail = async (mail: TMailData | null) => {
    setIsReadEmail(true)
    setSelectedMail(mail)

    try {
      const { data } = await getSingleMail(mail?._id as string)

      if (data) {
        setSingleMailData(data?.mail)

        const { data: allMailsData } = await getAllMails()
        if (allMailsData) {
          setMailData(allMailsData?.mails)
        }
      }
    } catch (error) {
      onError(error as AxiosError)
    }
  }

  return (
    <div
      onClick={() => {
        fetchSingleMail(mail)
      }}
      className={`p-1.5 cursor-pointer ${mail?._id === selectedMail?._id ? "bg-white-100 shadow-sm" : "bg-transparent"} rounded-lg flex items-center justify-between hover:bg-white-100 hover:shadow-sm`}
    >
      <div className="flex items-start gap-2">
        <Avatar name={mail?.senderName as string} />

        <div className={`${monaSans.className}`}>
          <h2 className="font-600 text-15 text-dark-200">{mail?.subject}</h2>
          <p className="font-300 text-14 text-gray-200 mt-0.5">
            {truncateString(mail?.content, 20)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-14 text-gray-200">
          {formatDate(new Date(mail?.createdAt as string), "hh.mmaaa")}
        </p>
        {!mail?.isRead && (
          <span className="bg-green-300 rounded-lg w-2.5 h-2.5 flex justify-center items-end text-center text-12 text-white-100 mt-0.5">
            1
          </span>
        )}
      </div>
    </div>
  )
}
