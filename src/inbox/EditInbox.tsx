import AddTask from "../components/AddTask";

const EditInbox = ({
  setToggleQuickadd,
  toggleQuickadd,
  setToggleEdit,
}: {
  setToggleQuickadd: (toggle: boolean) => void;
  toggleQuickadd: boolean;
  setToggleEdit: (edit: boolean) => void;
}) => {
  console.log(toggleQuickadd, "toggleQuickAdd");

  return (
    <div className={`w-full ${toggleQuickadd ? "flex" : " hidden"}`}>
      <AddTask
        setToggleQuickadd={setToggleQuickadd}
        setToggleEdit={setToggleEdit}
      />
    </div>
  );
};

export default EditInbox;
