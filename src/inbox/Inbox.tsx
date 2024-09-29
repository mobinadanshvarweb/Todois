import ListInbox from "./ListInbox";

const Inbox = () => {
  return (
    <div className="w-full h-screen  p-3 ">
      <div className="w-[80%] mx-auto  h-full">
        <p className="font-bold text-2xl ">Inbox</p>
        <ListInbox />
      </div>
    </div>
  );
};

export default Inbox;
