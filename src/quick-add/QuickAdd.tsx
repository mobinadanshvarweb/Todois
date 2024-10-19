import AddTask from "../components/AddTask";

const QuickAddTask = ({
  setToggleQuickadd,
}: {
  setToggleQuickadd: (toggle: boolean) => void;
}) => {
  return (
    <div
      onClick={() => {
        setToggleQuickadd(false);
      }}
      className="w-full h-screen flex justify-center items-center fixed z-30 top-0 left-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[550px] h-[185px] scroll-smooth shadow-2xl 
        shadow-[0 15px 50px 0 rgba(0, 0, 0, .35)] 
        overflow-y-auto rounded-lg bg-white"
      >
        <AddTask setToggleQuickadd={setToggleQuickadd} />
      </div>
    </div>
  );
};

export default QuickAddTask;
