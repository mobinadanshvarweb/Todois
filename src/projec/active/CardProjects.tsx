import { Link } from "react-router-dom";

const CardProjects = ({ name, id }: { name: string; id: string }) => {
  return (
    <div className="flex flex-col">
      <Link
        to={`/app/projects/${name}-${id}`}
        className="hover:bg-[#F5F5F5] w-full p-3 rounded text-sm"
      >
        {name}
      </Link>
    </div>
  );
};

export default CardProjects;
