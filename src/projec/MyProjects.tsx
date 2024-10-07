import { useState } from "react";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";
import AddProject from "./AddProject";

const MyProjects = () => {
  const navigate = useNavigate();
  const [addProject, setAddProject] = useState(false);
  return (
    <div
      onClick={() => {
        navigate("/app/projects/active");
      }}
      className="p-1 mt-4 flex justify-between text-[#666682] cursor-pointer rounded hover:bg-[#F2EFED]"
    >
      <span>My Projects</span>
      <span
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex items-center"
      >
        <span
          onClick={() => {
            setAddProject(!addProject);
          }}
          className="rounded hover:bg-[#e1dedc]"
        >
          <Icon height={20} width={20} urlIcon="/icons/addplus.svg" />
        </span>
        <span>
          {/* <Icon height={22} width={22} urlIcon="/icons/more.svg" /> */}
        </span>
      </span>
      {addProject && <AddProject setAddProject={setAddProject} />}
    </div>
  );
};

export default MyProjects;
