import { ButtonProps } from "@mbl-types/form"

export const buttonVariants = {
  green: "border border-green-300 bg-green-300 text-white-100 rounded-lg",
  none: "",
}
export const buttonActiveVariants = {
  green:
    "active:border active:border-green-300 active:bg-green-300 active:text-white-100 active:rounded-sm",
  none: "",
}
export const buttonSizes = {
  xs: "py-1 px-1 text-12",
  sm: "py-1.5 px-1.5 text-12.5",
  md: "py-1.5 px-2 text-14",
  lg: "py-2 px-3 text-13.5",
  none: "",
}

export const Button: React.FC<ButtonProps> = ({
  size = "sm",
  look = "green",
  activeLook = "green",
  className = "",
  datatestId,
  onClick,
  disabled = false,
  children,
  title = "",
  type = "submit",
}) => {
  const variantClasses = buttonVariants[look]
  const sizeClasses = buttonSizes[size]
  const activeClasses = buttonActiveVariants[activeLook]

  return (
    <button
      title={title}
      data-testid={datatestId}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${sizeClasses} ${variantClasses} ${disabled ? "opacity-80 cursor-not-allowed" : "opacity-100 cursor-pointer"} ${className} ${activeClasses}`}
    >
      {children}
    </button>
  )
}
