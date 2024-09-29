import { useState } from "react";
import Profile from "./Profile";

const ProfileCard = ({ name }: { name: string }) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="p-3 border w-fit"
        >
          {show ? `hidden ${name}` : `show ${name}`}
        </button>
        {show && <Profile name={name} />}
      </div>
    </div>
  );
};

export default ProfileCard;
