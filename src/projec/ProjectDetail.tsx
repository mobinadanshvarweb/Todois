import { useParams } from "react-router-dom";
import getAProject from "../api/getAProject";
import { useQuery } from "@tanstack/react-query";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [`project${id}`],
    queryFn: async () => await getAProject(id),
  });
  return (
    <div className="w-full flex flex-col p-3 h-screen">
      <h2 className="font-bold text-2xl ">{data?.name}</h2>
      <div className="flex flex-col justify-center h-[80%]  items-center">
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
  );
};

export default ProjectDetail;
