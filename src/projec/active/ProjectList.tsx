import { useQuery } from "@tanstack/react-query";
import getProject from "../../api/getProjects";
import CardProjects from "./CardProjects";
const ProjectList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await getProject(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <div>
      <h2 className="font-semibold pb-2 border-b">{data.length}/8 projects</h2>
      {data?.map((item: { name: string; id: string }) => {
        return <CardProjects key={item.id} name={item.name} id={item.id} />;
      })}
    </div>
  );
};

export default ProjectList;
