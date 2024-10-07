import ProjectList from "./ProjectList";

const ActiveProject = () => {
  return (
    <div className="w-full h-screen  p-3 ">
      <div className="w-[80%] mx-auto  h-full">
        <h1 className="font-bold mb-10 text-lg"> My Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
};

export default ActiveProject;
