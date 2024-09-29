import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "../api/deleteTask";

const ConfirmeMessage = ({
  setToggleConfirmMessage,
  task,
  id,
}: {
  setToggleConfirmMessage: (x: boolean) => void;
  task: string;
  id: string;
}) => {
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
    <div className="fixed w-full cursor-default h-full z-20 backdrop-blur top-0 left-0 flex justify-center  bg-[#7F7F7F]/[0.60]">
      <div className="w-[447px] h-[117px] bg-white rounded-lg flex flex-col shadow mt-20 p-3">
        <p className="flex-1">
          Are you sure you want to delete <b>{task}</b>?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setToggleConfirmMessage(false);
            }}
            className="rounded-[6px]  min-w-[68px] bg-[#F5F5F5] py-1 flex items-center justify-center text-[#444444]  hover:bg-[#E5E5E5]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteTaskMutation.mutate(id);
              setToggleConfirmMessage(false);
            }}
            className="rounded-[6px]  min-w-[68px] flex items-center justify-center py-1 bg-[#DC4C3E] text-white hover:bg-[#C3392C]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmeMessage;
