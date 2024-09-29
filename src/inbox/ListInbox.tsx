import { useQuery } from "@tanstack/react-query";
import CardInbox from "./CardInbox";
import getTask from "../api/getTask";
import { useState } from "react";
import NewAddTask from "./NewAddTask";

const ListInbox = () => {
  const [toggleQuickadd, setToggleQuickadd] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ["inbox-task"],
    queryFn: async () => await getTask(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {data?.length == 0 && (
        <>
          <NewAddTask
            setToggleQuickadd={setToggleQuickadd}
            toggleQuickadd={toggleQuickadd}
          />
          <div className="p-3 flex flex-col justify-center items-center">
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
        <NewAddTask
          setToggleQuickadd={setToggleQuickadd}
          toggleQuickadd={toggleQuickadd}
        />
      )}
    </div>
  );
};

export default ListInbox;
