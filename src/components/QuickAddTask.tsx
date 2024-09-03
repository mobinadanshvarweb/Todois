import Icon from "./Icon";

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
      className="w-full h-screen flex justify-center items-center fixed top-0 left-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[550px] h-[185px] scroll-smooth shadow-2xl 
        shadow-[0 15px 50px 0 rgba(0, 0, 0, .35)] 
        overflow-y-auto rounded-lg bg-white"
      >
        <div className="p-3">
          <textarea
            className="w-full h-[25px] overflow-y-clip resize-none outline-none"
            placeholder="Task name"
          ></textarea>
          <textarea
            className="w-full resize-none outline-none text-sm"
            placeholder="Description"
          ></textarea>
          <div className="flex gap-2">
            <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
              <Icon height={16} width={16} urlIcon="/icons/due-date.svg" />
              <span>Due date</span>
            </div>
            <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
              {" "}
              <Icon height={16} width={16} urlIcon="/icons/priority.svg" />
              Priority
            </div>
            <div className="p-[6px] flex gap-1 justify-center items-center border rounded text-[#666666] text-sm cursor-pointer hover:bg-[#F5F5F5]">
              <Icon height={16} width={16} urlIcon="/icons/reminder.svg" />
              Reminders
            </div>
          </div>
        </div>
        <hr />
        <div className="py-2 px-4 flex justify-between">
          <div className="flex-1"></div>
          <div className="flex gap-4">
            <button
              className="min-w-[68px] max-w-[100%] rounded-md p-[6px] text-sm bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]"
              onClick={() => {
                setToggleQuickadd(false);
              }}
            >
              Cancel
            </button>
            <button
              className="min-w-[68px] max-w-[100%] rounded-md p-[6px] text-sm text-white bg-[#EDA59E] cursor-not-allowed"
              disabled
            >
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddTask;
