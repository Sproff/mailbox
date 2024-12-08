import { format } from "date-fns"

export const formatDate = (date: string | Date, formatString: string) => {
  const parsedDate = new Date(date)

  return format(parsedDate, formatString)
}
