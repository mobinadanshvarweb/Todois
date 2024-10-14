import { useState } from "react";
import Icon from "../components/Icon";
import { Link, useNavigate } from "react-router-dom";
import AddProject from "./AddProject";
import { useQuery } from "@tanstack/react-query";
import getProject from "../api/getProjects";

const MyProjects = ({ isActive }: { isActive: boolean }) => {
  const navigate = useNavigate();
  const [addProject, setAddProject] = useState(false);
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await getProject(),
  });
  return (
    <div className="flex flex-col  mt-4 p-1">
      <div
        onClick={() => {
          navigate("/app/projects/active");
        }}
        className={`p-1 flex justify-between text-[#666682] cursor-pointer rounded hover:bg-[#F2EFED] ${
          isActive ? "bg-[#FFEFE5] text-black hover:bg-[#FFEFE5]" : ""
        }`}
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
      {data?.slice(1).map((item: { name: string; id: string }) => {
        return (
          <Link
            to={`/app/projects/${item.id}`}
            className="p-1 text-sm  text-black flex items-center gap-2"
            key={item.id}
          >
            <span className="text-lg text-gray-600 flex items-center">#</span>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MyProjects;
