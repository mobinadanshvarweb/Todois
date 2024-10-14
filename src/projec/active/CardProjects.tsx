import { FC, useState } from "react";
import Icon from "../../components/Icon";
import ConfirmeMessage from "../../components/ConfirmeMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteProject from "../../api/deleteProject";
import { useNavigate } from "react-router-dom";

interface CardProjectsProps {
  name: string;
  id: string;
  isActive: boolean;
  toggleMenu: (id: string) => void;
}

const CardProjects: FC<CardProjectsProps> = ({
  name,
  id,
  isActive,
  toggleMenu,
}) => {
  const navigate = useNavigate();
  const [toggleConfirmMessage, setToggleConfirmMessage] = useState(false);
  const queryClient = useQueryClient();
  const deleteTaskMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
  return (
    <div
      onClick={() => {
        navigate(`/app/projects/${id}`);
      }}
      className="flex flex-col cursor-pointer"
    >
      <div className="hover:bg-[#F5F5F5] w-full p-3 group rounded flex justify-between items-center text-sm">
        {name}
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu(id);
          }}
          className="cursor-pointer relative hidden group-hover:flex"
          aria-expanded={isActive}
          aria-haspopup="true"
        >
          <Icon height={20} width={20} urlIcon="/icons/more.svg" />
          {isActive && (
            <>
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-32 z-20 absolute right-[100%] top-[50%] translate-y-[-50%] p-2 shadow-xl bg-white flex flex-col gap-2 rounded"
              >
                <div className="flex gap-2 items-center text-[#565656]">
                  <Icon height={15} width={15} urlIcon="/icons/pen.svg" />
                  Edit
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setToggleConfirmMessage(!toggleConfirmMessage);
                  }}
                  className="flex gap-2 items-center text-[#DC4C3E]"
                >
                  <Icon
                    height={15}
                    width={15}
                    urlIcon="/icons/delete-color.svg"
                  />
                  Delete
                </div>
              </div>
              <div className="fixed z-10 top-0 left-0 w-full h-full cursor-default"></div>
            </>
          )}
        </div>
      </div>
      {toggleConfirmMessage && (
        <ConfirmeMessage
          deleteTaskMutation={deleteTaskMutation}
          setToggleConfirmMessage={setToggleConfirmMessage}
          task={name}
          id={id}
        />
      )}
    </div>
  );
};

export default CardProjects;
