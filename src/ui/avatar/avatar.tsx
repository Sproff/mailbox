import { getInitials, stringToColour } from "@mbl-utils/text"

export const Avatar = ({ name }: { name: string }) => {
  const getBgColor = stringToColour(name)

  return (
    <div
      className="rounded-full h-5 w-5 flex items-center justify-center text-14 text-white-100 font-400 overflow-hidden"
      style={{
        backgroundColor: getBgColor,
      }}
    >
      <p>{getInitials(name)}</p>
    </div>
  )
}
