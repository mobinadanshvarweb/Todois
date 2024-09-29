import AddTask from "../components/AddTask";
import Icon from "../components/Icon";

const NewAddTask = ({
  setToggleQuickadd,
  toggleQuickadd,
}: {
  setToggleQuickadd: (toggle: boolean) => void;
  toggleQuickadd: boolean;
}) => {
  return (
    <div className="">
      {!toggleQuickadd && (
        <button
          onClick={() => {
            setToggleQuickadd(!toggleQuickadd);
          }}
          className="p-1 w-full flex items-center gap-2 text-[#666666] hover:text-[#DD4C3E]  rounded-md"
        >
          <Icon height={20} width={20} urlIcon="/icons/add.svg" />
          Add task
        </button>
      )}
      {toggleQuickadd && (
        <AddTask
          setToggleQuickadd={setToggleQuickadd}
          classname="border rounded-lg mt-2"
        />
      )}
    </div>
  );
};

export default NewAddTask;
