import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"

import { SelectProps } from "@mbl-types/form"

import { Icons } from "@mbl-ui/icons/base"

import { truncateString } from "@mbl-utils/text"

export const Select = ({ selected, setSelected, options, placeholder, disabled }: SelectProps) => {
  return (
    <div className="relative">
      <Listbox as="div" value={selected} onChange={setSelected}>
        <ListboxButton
          value={selected?.value}
          className="flex items-center justify-between gap-1 px-1.5 py-1 bg-gray-100 w-full text-16 placeholder:text-14 rounded-lg focus-visible:outline-none appearance-none h-[2.7rem]"
          disabled={disabled}
        >
          <span>{truncateString(selected?.label || placeholder, 15)}</span>

          <span>
            <Icons.arrowDown />
          </span>
        </ListboxButton>
        <ListboxOptions
          anchor={{
            to: "bottom start",
            offset: 0,
          }}
          className="text-14 w-[var(--input-width)] md:w-[30rem] rounded-lg border border-gray-100 bg-white-100 h-max pl-1 py-1 mt-0.5 shadow-xxs !overflow-y-scroll empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        >
          {options.map((item) => (
            <ListboxOption
              key={item.label}
              value={item}
              className="group flex cursor-pointer gap-1 p-0.5 rounded-sm select-none data-[focus]:bg-gray-100/10"
            >
              {selected?.label === item?.label ? (
                <span>
                  <Icons.check />
                </span>
              ) : (
                <span className="opacity-10">
                  <Icons.check />
                </span>
              )}
              <div className="text-14">{item?.label}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
