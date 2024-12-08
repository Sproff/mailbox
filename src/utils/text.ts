export const capitalize = (str = "") => {
  if (!str) return ""

  return str.trim().charAt(0).toUpperCase() + str.slice(1)
}

export const truncateString = (str = "", num = 100) => {
  if (!str) return ""

  return str.length > num ? str.slice(0, num) + "..." : str
}

export const getInitials = (name: string) => {
  if (!name) return ""

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return initials
}

export const stringToColour = (str: string): string => {
  if (!str) return "#cccccc"

  let hash = 0

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Convert hash to RGB color
  let colour = "#"
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, "0")
  }

  return colour
}
