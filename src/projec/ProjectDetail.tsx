import { useParams } from "react-router-dom";
import getAProject from "../api/getAProject";
import { useQuery } from "@tanstack/react-query";
import AddTask from "../components/AddTask";
import { useState } from "react";
import NewAddTask from "../inbox/NewAddTask";

const ProjectDetail = () => {
  const [toggleQuickadd, setToggleQuickadd] = useState(false);
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [`project${id}`],
    queryFn: async () => await getAProject(id),
  });
  console.log("projectid", data?.id);

  return (
    <div className=" flex flex-col p-3  w-[80%] mx-auto  h-screen">
      <h2 className="font-bold text-2xl ">{data?.name}</h2>
      <div className="flex flex-col justify-center h-[80%] items-center gap-2">
        <div className="hidden md:block w-full mt-6">
          <NewAddTask
            setToggleQuickadd={setToggleQuickadd}
            toggleQuickadd={toggleQuickadd}
          />
        </div>
        {toggleQuickadd && (
          <div
            onClick={() => {
              setToggleQuickadd(false);
            }}
            className="w-full h-full fixed z-20  md:hidden left-0 top-0"
          >
            <div className="md:hidden fixed z-40 p-3  shadow-lg rounded-t-lg bottom-0 left-0 w-full bg-white">
              <AddTask
                setToggleQuickadd={setToggleQuickadd}
                projectId={"2341780464"}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <img
            src="/img/project.png"
            alt="pic"
            className="w-56 h-52 object-cover"
          />
          <p className="font-[500]">Start small (or dream big)...</p>
          <p className="text-center text-sm mt-2">
            Add your tasks or find a template to get <br /> started with your
            project.
          </p>
          <a
            className="flex items-center mt-8 underline decoration-[#dc4c3e] text-[#dc4c3e]"
            href="https://todoist.com/help/articles/introduction-to-projects-TLTjNftLM#use?utm_source=todoist&utm_medium=app&utm_campaign=new_project_screen&utm_content=web"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <span className="text-sm">How to craft a perfect project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
