import React, { useState } from "react";
import Icon from "../components/Icon";
import ConfirmeMessage from "../components/ConfirmeMessage";
import EditInbox from "./EditInbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "../api/deleteTask";
import closeTask from "../api/closeTask";

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
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleCompleteTask = async () => {
    if (audioRef.current) {
      try {
        // ابتدا سعی می‌کنیم که صدا را آماده پخش کنیم
        const playPromise = audioRef.current.play();

        // اطمینان از اینکه اگر مرورگر پخش صدا را بلاک کرد، خطا را هندل کنیم
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio is ready to be played.");
            })
            .catch((error) => {
              console.warn("Playback prevented:", error);
            });
        }

        // فراخوانی API برای تکمیل تسک
        await closeTask(id); // ID تسک به عنوان مثال
        await queryClient.invalidateQueries({ queryKey: ["inbox-task"] });

        // بعد از تکمیل موفقیت‌آمیز API، صدا را پخش می‌کنیم
        if (audioRef.current) {
          await audioRef.current.play(); // صدا را پخش می‌کنیم
          console.log("Task completed and audio played.");
        }
      } catch (error) {
        console.error("Failed to complete task or play audio:", error);
      }
    }
  };
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
        <div className="flex gap-2 items-center">
          <span className="flex items-center justify-center w-4 h-4 rounded-full border border-gray-500">
            <span
              onClick={handleCompleteTask}
              className="hidden group-hover:flex "
            >
              <Icon height={20} width={20} urlIcon="/icons/complete.svg" />
              <audio ref={audioRef} src="/ding.mp3" />
            </span>
          </span>
          <span className=" capitalize">{content}</span>
        </div>
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
