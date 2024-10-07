import { useState } from "react";
import postProject from "../api/postProject";
import Icon from "../components/Icon";
import SelectColor from "./select/SelectColor";
import MySwitch from "../components/Switch";
import { useQueryClient } from "@tanstack/react-query";

const AddProject = ({
  setAddProject,
}: {
  setAddProject: (add: boolean) => void;
}) => {
  const [projectData, setProjectData] = useState({
    name: "",
    color: "",
    favor: false,
  });
  const queryClient = useQueryClient();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setAddProject(false);
      }}
      className="fixed bg-[#403f3f6f] w-screen overflow-x-hidden h-full flex  justify-center items-center top-0 left-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-96 h-80 flex flex-col bg-white rounded cursor-default"
      >
        <span className="w-full p-2 flex gap-2  items-center border-b text-[#1d1d1d]">
          Add Project
          <a
            className=" flex items-center"
            target="_blank"
            href="https://todoist.com/help/articles/introduction-to-projects-TLTjNftLM"
          >
            <Icon height={20} width={20} urlIcon="/icons/help.svg" />
          </a>
        </span>
        <span className="flex-1 flex flex-col gap-4 p-2 overflow-y-auto">
          <div>
            <label htmlFor="name" className="text-black font-bold text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full outline-none border rounded mt-2 px-2"
              value={projectData.name}
              onChange={(e) => {
                setProjectData({
                  name: e.target.value,
                  color: "",
                  favor: false,
                });
              }}
            />
          </div>
          <div className="flex-col">
            <span className="text-black font-bold text-sm">Color</span>
            <div className="w-full">
              <SelectColor
                checkColor={setProjectData}
                favor={projectData.favor}
                name={projectData.name}
              />
            </div>
          </div>
          <div className="flex  gap-2 items-center">
            <div className="">
              <MySwitch
                checkFavor={setProjectData}
                name={projectData.name}
                color={projectData.color}
              />
            </div>
            <span className="text-black text-sm">Add to favorites</span>
          </div>
        </span>
        <span className="border-t p-2 flex gap-2 justify-end">
          <button
            onClick={() => {
              setAddProject(false);
            }}
            className="hidden md:flex justify-center items-center min-w-[68px] max-w-[100%] rounded-md p-[6px] text-sm bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await postProject({ projectData });
              queryClient.invalidateQueries({ queryKey: ["inbox-task"] });
              setAddProject(false);
            }}
            className={`hidden md:flex justify-center items-center min-w-[68px] max-w-[100%] rounded-md border p-[6px] text-sm  text-white  
               `}
          >
            Add task
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddProject;
