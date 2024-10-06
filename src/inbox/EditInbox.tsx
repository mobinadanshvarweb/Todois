import AddTask from "../components/AddTask";

const EditInbox = ({
  setToggleQuickadd,
  toggleQuickadd,
  setToggleEdit,
  id,
  content,
  description,
}: {
  setToggleQuickadd: (toggle: boolean) => void;
  toggleQuickadd: boolean;
  setToggleEdit: (edit: boolean) => void;
  id: string;
  content: string;
  description: string;
}) => {
  console.log(toggleQuickadd, "toggleQuickAdd");

  return (
    <div
      className={`w-full ${
        toggleQuickadd ? "flex border border-gray-400 rounded" : " hidden"
      }`}
    >
      <AddTask
        setToggleQuickadd={setToggleQuickadd}
        setToggleEdit={setToggleEdit}
        id={id}
        content={content}
        description={description}
      />
    </div>
  );
};

export default EditInbox;
