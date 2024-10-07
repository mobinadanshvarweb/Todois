import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Icon from "../../components/Icon";

type Color = {
  name: string;
  value: string;
};

const colors: Color[] = [
  { name: "berry red", value: "#b8256f" },
  { name: "Red", value: "#db4035" },
  { name: "yellow", value: "#fad000" },
  { name: "olive green", value: "#afb83b" },
  { name: "Green", value: "#299438" },
  { name: "mint green", value: "#6accbc" },
  { name: "sky Blue", value: "#14aaf5" },
  { name: "lavender", value: "#eb96eb" },
  { name: "magenta", value: "#e05194" },
  { name: "grey", value: "#b8b8b8" },
];

export default function ColorDropdown({
  checkColor,
  name,
  favor,
}: {
  checkColor: any;
  name: string;
  favor: boolean;
}) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <Listbox value={selectedColor} onChange={setSelectedColor}>
        <div className="relative mt-1 w-full">
          <ListboxButton className=" relative w-full cursor-default rounded bg-white p-2 py-1  text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedColor.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon
                height={20}
                width={20}
                urlIcon="/icons/more.svg"
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
          <ListboxOptions className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {colors.map((color, idx) => (
              <ListboxOption
                key={idx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-2  capitalize ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
                value={color}
              >
                {({ selected }) => (
                  <>
                    <span
                      onClick={() => {
                        checkColor({
                          name: name,
                          color: color.name,
                          favor: favor,
                        });
                      }}
                      className={` truncate flex gap-1 items-center ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      <span
                        className={`flex w-2 h-2 rounded-full`}
                        style={{ backgroundColor: `${color.value}` }}
                      ></span>{" "}
                      {color.name}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
