import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAProject from "../api/getAProject";

const ProjectDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({ name: "" });
  useEffect(() => {
    const fetchData = async () => {
      const newData = await getAProject(id);

      setData(newData);
    };

    fetchData();
  }, [id]);
  return <div className="h-[100vh]">{data?.name}</div>;
};

export default ProjectDetail;
