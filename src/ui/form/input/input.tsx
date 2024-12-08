import { InputProps } from "@mbl-types/form"

export const Input = ({
  id,
  datatestid,
  placeholder,
  type,
  value,
  defaultValue,
  min,
  max,
  onChange: handleChange,
  onKeyDown,
  passwordIcon,
  handleClick,
  formHook,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        data-testid={datatestid}
        className="px-1.5 py-1 bg-gray-100 w-full text-16 placeholder:text-14 rounded-lg focus-visible:outline-none appearance-none h-[2.7rem]"
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        {...{ ...formHook, ...(handleChange && { onChange: handleChange }) }}
      />
      <div className="absolute top-[.8rem] right-2 cursor-pointer" onClick={handleClick}>
        {passwordIcon}
      </div>
    </div>
  )
}
