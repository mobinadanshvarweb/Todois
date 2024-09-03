import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NotifButton = ({
  isActive,
  urlIcon,
}: {
  isActive: boolean;
  urlIcon: string;
}) => {
  return (
    <NavLink to="/app/notification">
      <span
        className={`flex items-center cursor-pointer  hover:bg-[#F2EFED] p-1 rounded transition-all ${
          isActive ? "bg-[#FFEFE5]" : ""
        }`}
      >
        <Icon urlIcon={urlIcon} width={25} height={25} />
      </span>
    </NavLink>
  );
};

export default NotifButton;
