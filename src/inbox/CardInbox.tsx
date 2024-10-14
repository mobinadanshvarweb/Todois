import { useState } from "react";
import Icon from "../components/Icon";
import ConfirmeMessage from "../components/ConfirmeMessage";
import EditInbox from "./EditInbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "../api/deleteTask";

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
  const queryClient = useQueryClient();
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
    },
  });
  return (
    <div>
      <div
        className={`flex-col border-b py-3  cursor-pointer group ${
          toggleEdit ? " hidden" : " flex"
        }`}
      >
        <div className="h-6  w-full flex justify-end items-center">
          <div className={`hidden w-fit h-fit group-hover:flex`}>
            <span
              title="delete"
              className="flex px-1 hover:bg-[#F2EFED] rounded "
              onClick={() => {
                setToggleConfirmMessage(!toggleConfirmMessage);
              }}
            >
              <Icon height={17} width={17} urlIcon="/icons/delete.svg" />
            </span>
            <span
              title="edit"
              className="flex px-1 hover:bg-[#F2EFED] rounded "
              onClick={() => {
                setToggleEdit(!toggleEdit);
                setToggleQuickadd(true);
              }}
            >
              <Icon height={17} width={17} urlIcon="/icons/pen.svg" />
            </span>
          </div>
        </div>
        <span className=" capitalize">{content}</span>
        <span className="text-[#666666] text-xs capitalize">{description}</span>

        {toggleConfirmMessage && (
          <ConfirmeMessage
            deleteTaskMutation={deleteTaskMutation}
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
    </div>
  );
};

export default CardInbox;
