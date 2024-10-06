import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Icon from "./Icon";
import postTask from "../api/postTask";
import updateTask from "../api/updateTask";

const AddTask = ({
  setToggleQuickadd,
  setToggleEdit,
  classname,
  id,
  content,
  description,
}: {
  setToggleQuickadd: (toggle: boolean) => void;
  setToggleEdit?: any;
  classname?: string;
  id?: string;
  content: string;
  description: string;
}) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [editedData, setEditedData] = useState({
    editedTitle: content,
    editedDescription: description,
  });
  const queryClient = useQueryClient();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`${classname} w-full`}
    >
      {" "}
      <div className="p-3">
        <textarea
          className="w-full h-[25px] overflow-y-clip resize-none outline-none"
          placeholder="Task name"
          onChange={(e) => {
            if (id) {
              setEditedData({
                editedTitle: e.target.value,
                editedDescription: editedData.editedDescription,
              });
            } else {
              setData({ title: e.target.value, description: data.description });
            }
          }}
          value={id ? editedData.editedTitle : data.title}
        ></textarea>
        <textarea
          className="w-full resize-none outline-none text-sm"
          placeholder="Description"
          onChange={(e) => {
            if (id) {
              setEditedData({
                editedDescription: e.target.value,
                editedTitle: editedData.editedTitle,
              });
            } else {
              setData({ description: e.target.value, title: data.title });
            }
          }}
          value={id ? editedData.editedDescription : data.description}
        ></textarea>
        <div className="flex gap-2">
          <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
            <Icon height={16} width={16} urlIcon="/icons/due-date.svg" />
            <span>Due date</span>
          </div>
          <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
            {" "}
            <Icon height={16} width={16} urlIcon="/icons/priority.svg" />
            Priority
          </div>
          <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
            <Icon height={16} width={16} urlIcon="/icons/reminder.svg" />
            Reminders
          </div>
        </div>
      </div>
      <hr />
      <div className="py-2 px-4 flex justify-between">
        <div className="flex-1"></div>
        <div className="flex gap-4">
          <button
            className="hidden md:flex justify-center items-center min-w-[68px] max-w-[100%] rounded-md p-[6px] text-sm bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]"
            onClick={() => {
              setToggleQuickadd(false);
              setToggleEdit(false);
              setEditedData({
                editedDescription: description,
                editedTitle: description,
              });
            }}
          >
            Cancel
          </button>
          <button
            className={`hidden md:flex justify-center items-center min-w-[68px] max-w-[100%] rounded-md border p-[6px] text-sm  text-white   ${
              data?.title || content
                ? " cursor-pointer bg-[#DC4C3E] "
                : "  cursor-not-allowed  bg-[#EDA59E] "
            }"`}
            disabled={data.title || content ? false : true}
            onClick={async () => {
              if (id) {
                await updateTask({ editedData, id });
                setToggleEdit(false);
                queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
              } else {
                await postTask({ data });
                setData({ title: "", description: "" });
                queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
                setToggleQuickadd(false);
              }
            }}
          >
            Add task
          </button>
          <button
            className={`flex md:hidden justify-center px-3 items-center rounded-md border p-[8px] text-sm  text-white   ${
              data?.title
                ? " cursor-pointer bg-[#DC4C3E] "
                : "  cursor-not-allowed  bg-[#EDA59E] "
            }"`}
            disabled={data.title ? false : true}
            onClick={async () => {
              await postTask({ data });
              setData({ title: "", description: "" });
              queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
              setToggleQuickadd(false);
            }}
          >
            <Icon height={20} width={20} urlIcon="/icons/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
