import { useQuery } from "@tanstack/react-query";
import getProject from "../../api/getProjects";
import CardProjects from "./CardProjects";
import { useState } from "react";

const ProjectList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await getProject(),
  });
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const newData = data?.slice(1);

  return (
    <div>
      <h2 className="font-semibold pb-2 border-b">
        {data.length - 1}/8 projects
      </h2>
      {newData?.map((item: { name: string; id: string }) => {
        return (
          <CardProjects
            key={item.id}
            name={item.name}
            id={item.id}
            isActive={activeCardId === item.id}
            toggleMenu={toggleMenu}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
