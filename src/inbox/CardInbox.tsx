import { useState } from "react";
import Icon from "../components/Icon";
import ConfirmeMessage from "../components/ConfirmeMessage";

const CardInbox = ({
  content,
  description,
  id,
}: {
  content: string;
  description: string;
  id: string;
}) => {
  const [toggleConfirmMessage, setToggleConfirmMessage] = useState(false);
  return (
    <div className="flex flex-col border-b py-3 cursor-pointer relative group">
      <span className=" capitalize">{content}</span>
      <span className="text-[#666666] text-xs capitalize">{description}</span>
      <div className={`absolute right-0 top-0 gap-1 hidden group-hover:flex`}>
        <span
          className="flex px-1 hover:bg-[#F2EFED] rounded "
          onClick={() => {
            setToggleConfirmMessage(!toggleConfirmMessage);
          }}
        >
          <Icon height={17} width={20} urlIcon="/icons/delete.svg" />
        </span>
      </div>
      {toggleConfirmMessage && (
        <ConfirmeMessage
          setToggleConfirmMessage={setToggleConfirmMessage}
          task={content}
          id={id}
        />
      )}
    </div>
  );
};

export default CardInbox;
