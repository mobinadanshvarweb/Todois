import { useQuery } from "@tanstack/react-query";
import CardInbox from "./CardInbox";
import getTask from "../api/getTask";
import { useState } from "react";
import NewAddTask from "./NewAddTask";
import AddTask from "../components/AddTask";
import Icon from "../components/Icon";

const ListInbox = () => {
  const [toggleQuickadd, setToggleQuickadd] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ["inbox-task"],
    queryFn: async () => await getTask(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="h-[95%] flex flex-col  relative ">
      {data?.length == 0 && (
        <>
          <div className="hidden md:block">
            <NewAddTask
              setToggleQuickadd={setToggleQuickadd}
              toggleQuickadd={toggleQuickadd}
            />
          </div>
          {toggleQuickadd && (
            <div
              onClick={() => {
                setToggleQuickadd(false);
              }}
              className="w-full h-full fixed z-30  left-0 top-0"
            >
              <div className="md:hidden fixed z-40 p-3  shadow-lg rounded-t-lg bottom-0 left-0 w-full bg-white">
                <AddTask setToggleQuickadd={setToggleQuickadd} />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center h-[80%]  items-center">
            <img
              src="/img/empty-inbox.png"
              alt="pic"
              className="w-56 h-52 object-cover"
            />
            <p className="font-[500]">Your peace of mind is priceless</p>
            <p className="text-center text-sm mt-2">
              Well done! All your tasks are organized in <br /> the right place.
            </p>
            <a
              className="flex items-center mt-8 underline decoration-[#dc4c3e] text-[#dc4c3e]"
              href="https://todoist.com/help/articles/360000028960"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <span className="text-sm">
                How to declutter your mind with the Inbox
              </span>
            </a>
          </div>
        </>
      )}
      {data?.map(
        (item: { id: string; content: string; description: string }) => (
          <CardInbox
            key={item.id}
            id={item.id}
            content={item.content}
            description={item.description}
          />
        )
      )}
      {data?.length > 0 && (
        <>
          <div className="hidden md:block">
            <NewAddTask
              setToggleQuickadd={setToggleQuickadd}
              toggleQuickadd={toggleQuickadd}
            />
          </div>
          {toggleQuickadd && (
            <div
              onClick={() => {
                setToggleQuickadd(false);
              }}
              className="w-full h-full fixed z-30  left-0 top-0"
            >
              <div className="md:hidden fixed z-40 p-3  shadow-lg rounded-t-lg bottom-0 left-0 w-full bg-white">
                <AddTask setToggleQuickadd={setToggleQuickadd} />
              </div>
            </div>
          )}
        </>
      )}
      <div
        onClick={() => {
          setToggleQuickadd(!toggleQuickadd);
        }}
        className="fixed bottom-20 right-4 rounded-xl flex md:hidden justify-center items-center shadow-2xl w-12 h-12 bg-[#cf3f32] z-20 cursor-pointer"
      >
        <Icon height={20} width={20} urlIcon="/icons/addwhite.svg" />
      </div>
    </div>
  );
};

export default ListInbox;
