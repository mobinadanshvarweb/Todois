import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MySwitch({
  checkFavor,
  name,
  color,
}: {
  checkFavor: any;
  name: string;
  color: string;
}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => {
          checkFavor({ name: name, color: color, favor: !enabled });
        }}
        className={`${enabled ? "bg-[#DC4C3E]" : "bg-[#B3B3B3]"}
          relative inline-flex h-[18px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
