import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const SideLink = ({
  text,
  icon,
  href,
  isActive,
}: {
  text: string;
  icon: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <NavLink to={href}>
      <li
        className={`hover:bg-[#F2EFED] p-1 rounded-md w-full cursor-pointer  flex items-center gap-2 ${
          isActive ? "bg-[#FFEFE5] text-[#BB1F00] hover:bg-[#FFEFE5]" : ""
        }`}
      >
        <Icon
          height={20}
          width={20}
          urlIcon={icon}
          className=" fill-[#BB1F00] "
        />
        {text}
      </li>
    </NavLink>
  );
};

export default SideLink;
