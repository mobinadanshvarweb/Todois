import { useState } from "react";
import Icon from "../components/Icon";
import ConfirmeMessage from "../components/ConfirmeMessage";
import EditInbox from "./EditInbox";

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
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleQuickadd, setToggleQuickadd] = useState(false);
  return (
    <>
      <div
        className={`flex-col border-b py-3 cursor-pointer relative group ${
          toggleEdit ? " hidden" : " flex"
        }`}
      >
        <span className=" capitalize">{content}</span>
        <span className="text-[#666666] text-xs capitalize">{description}</span>
        <div className={`absolute right-0 top-0 gap-1 hidden group-hover:flex`}>
          <span
            title="delete"
            className="flex px-1 hover:bg-[#F2EFED] rounded "
            onClick={() => {
              setToggleConfirmMessage(!toggleConfirmMessage);
            }}
          >
            <Icon height={17} width={20} urlIcon="/icons/delete.svg" />
          </span>
          <span
            title="edit"
            className="flex px-1 hover:bg-[#F2EFED] rounded "
            onClick={() => {
              setToggleEdit(!toggleEdit);
              setToggleQuickadd(true);
              console.log("hii", toggleQuickadd);
            }}
          >
            <Icon height={17} width={20} urlIcon="/icons/pen.svg" />
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
      <div className={`w-full  ${toggleEdit ? "flex" : "hidden"}`}>
        <EditInbox
          setToggleQuickadd={setToggleQuickadd}
          toggleQuickadd={toggleQuickadd}
          setToggleEdit={setToggleEdit}
          id={id}
          content={content}
          description={description}
        />
      </div>
    </>
  );
};

export default CardInbox;
