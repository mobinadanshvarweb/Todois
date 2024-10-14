import { useState } from "react";
import Icon from "./components/Icon";
import SideLink from "./components/SideLink";
import { Outlet, useLocation } from "react-router-dom";
import NotifButton from "./components/NotifButton";
import QuickAddTask from "./quick-add/QuickAdd";
import MyProjects from "./projec/MyProjects";

const Layout = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const [toggleQuickadd, setToggleQuickadd] = useState(false);
  const location = useLocation();
  return (
    <div className="w-full  flex  relative overflow-x-hidden">
      <div
        className={`hidden md:block ${
          toggleSideBar
            ? "w-72 p-3 translate-x-[0%] "
            : "  translate-x-[-100%] w-0"
        } bg-[#FCFAF8] flex  flex-col  transition-all duration-500 `}
      >
        <div
          className={`${
            toggleSideBar ? "flex" : "hidden"
          } justify-between items-center`}
        >
          <span className="flex items-center hover:bg-[#F2EFED] rounded p-1 cursor-pointer">
            USERNAME
          </span>
          <div className="flex gap-1 items-center">
            <NotifButton
              urlIcon={
                location.pathname.endsWith("notification")
                  ? "/icons/notif.svg"
                  : "/icons/notif-color.svg"
              }
              isActive={location.pathname.endsWith("notification")}
            />
            <span className="flex items-center cursor-pointer  hover:bg-[#F2EFED] p-1 rounded transition-all">
              <Icon
                urlIcon="/icons/toggle.svg"
                width={25}
                height={25}
                onClick={() => setToggleSideBar(!toggleSideBar)}
              />
            </span>
          </div>
        </div>
        <ul className={` ${toggleSideBar ? "block" : "hidden"}`}>
          <button
            onClick={() => {
              setToggleQuickadd(!toggleQuickadd);
            }}
            className="p-1 w-full flex items-center gap-2 text-[#BB1F00] font-semibold hover:bg-[#F2EFED] rounded-md"
          >
            <Icon height={20} width={20} urlIcon="/icons/add.svg" />
            Add task
          </button>

          <SideLink
            text="Inbox"
            icon={`${
              location.pathname.endsWith("inbox")
                ? "/icons/inbox-color.svg"
                : "/icons/inbox.svg"
            }`}
            href="/app/inbox"
            isActive={location.pathname.endsWith("inbox")}
          />
          <SideLink
            text="Today"
            icon={
              location.pathname.endsWith("today")
                ? "/icons/today-color.svg"
                : "/icons/today.svg"
            }
            href="/app/today"
            isActive={location.pathname.endsWith("today")}
          />
          {/* <SideLink text="Upcoming" icon="/icons/upcoming.svg" href="/" />
          <SideLink text="Filters & Labels" icon="/icons/filter.svg" href="/" /> */}
        </ul>
        <MyProjects isActive={location.pathname.endsWith("active")} />
      </div>
      <div className="flex-1">
        <div className="md:h-10 md:p-3">
          {!toggleSideBar && (
            <span className="hidden md:flex w-fit hover:bg-[#F2EFED] items-center cursor-pointer p-1 rounded transition-all">
              <Icon
                urlIcon="/icons/toggle.svg"
                width={25}
                height={25}
                onClick={() => setToggleSideBar(!toggleSideBar)}
              />
            </span>
          )}
        </div>
        {toggleQuickadd && (
          <QuickAddTask setToggleQuickadd={setToggleQuickadd} />
        )}
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-between md:hidden p-3 bg-[#FCFAF8]">
        <SideLink
          text="Inbox"
          icon={`${
            location.pathname.endsWith("inbox")
              ? "/icons/inbox-color.svg"
              : "/icons/inbox.svg"
          }`}
          href="/app/inbox"
          isActive={location.pathname.endsWith("inbox")}
        />
        <SideLink
          text="Today"
          icon={
            location.pathname.endsWith("today")
              ? "/icons/today-color.svg"
              : "/icons/today.svg"
          }
          href="/app/today"
          isActive={location.pathname.endsWith("today")}
        />
      </div>
    </div>
  );
};

export default Layout;
